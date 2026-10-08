"""Regenerate the public CV from the same data used by the website."""
from pathlib import Path
from html import escape
import yaml
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import reportlab

root = Path(__file__).resolve().parents[1]
cv = yaml.safe_load((root / '_data/cv.yml').read_text())['cv']
fontdir = Path(reportlab.__file__).parent / 'fonts'
pdfmetrics.registerFont(TTFont('CV', str(fontdir / 'Vera.ttf')))
pdfmetrics.registerFont(TTFont('CVBold', str(fontdir / 'VeraBd.ttf')))
styles = getSampleStyleSheet()
for style in styles.byName.values():
    style.fontName = 'CV'
styles.add(ParagraphStyle(name='CVHeading', fontName='CVBold', fontSize=12, leading=16, textColor=colors.HexColor('#2463a6'), spaceBefore=14, spaceAfter=7))
styles['Normal'].fontSize = 9
styles['Normal'].leading = 13
styles['Title'].fontName = 'CVBold'
styles['Title'].fontSize = 21
styles['Title'].leading = 26
story = [Paragraph(escape(cv['name']), styles['Title']), Paragraph(escape(cv['label']), styles['Normal']), Spacer(1, 7), Paragraph(escape(cv['email']), styles['Normal']), Paragraph(escape(cv['location']), styles['Normal']), Spacer(1, 10), Paragraph(escape(cv['summary']), styles['Normal'])]
for heading, entries in cv['sections'].items():
    story.append(Paragraph(escape(heading), styles['CVHeading']))
    for entry in entries:
        if isinstance(entry, str) or 'bullet' in entry:
            text = escape(entry if isinstance(entry, str) else entry['bullet'])
        elif 'institution' in entry:
            text = f"<b>{escape(entry['institution'])}</b> — {escape(entry['studyType'])}, {escape(entry['area'])}<br/>{escape(str(entry['start_date']))} – {escape(str(entry['end_date']))} · {escape(entry['location'])}"
            for highlight in entry.get('highlights', []): text += '<br/>' + escape(highlight)
        elif 'company' in entry:
            text = f"<b>{escape(entry['position'])}</b> · {escape(entry['company'])}<br/>{entry['start_date']} – {entry['end_date']}<br/>{escape(entry['summary'])}"
        elif 'journal' in entry:
            text = f'''<b>{escape(entry['title'])}</b><br/>{escape(', '.join(entry['authors']))}<br/>{escape(entry['journal'])} (2026). DOI: <link href="{escape(entry['url'])}">{escape(entry['doi'])}</link><br/>Preprint: Entangling remote qubits through a two-mode squeezed reservoir (arXiv:2510.07139).'''
        elif 'name' in entry:
            text = f"<b>{escape(entry['name'])}</b>: {escape(entry['summary'])}"
        else:
            text = f"<b>{escape(entry['label'])}</b>: {escape(entry['details'])}"
        story.append(KeepTogether([Paragraph(text, styles['Normal']), Spacer(1, 6)]))
out = root / 'assets/pdf/Alejandro_Andres_Juanes_CV.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
def footer(canvas, doc):
    canvas.setFont('CV', 8)
    canvas.setFillColor(colors.HexColor('#64748b'))
    canvas.drawString(42, 25, 'Alejandro Andrés-Juanes · Curriculum vitae')
    canvas.drawRightString(A4[0]-42, 25, str(doc.page))
SimpleDocTemplate(str(out), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=36, bottomMargin=40, title=cv['name']+' — Curriculum vitae', author=cv['name']).build(story, onFirstPage=footer, onLaterPages=footer)
print(out)
