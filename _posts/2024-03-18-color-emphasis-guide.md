---
layout: post
title: "Using Color Emphasis in Your Content"
date: 2024-03-18
categories: [Tutorial, Design]
description: "Learn how to use your custom color palette for emphasis in blog posts and content"
---

This post shows you how to use your beautiful color palette for emphasis in your content! You now have several ways to add <span class="text-scarlet">**primary-scarlet**</span> and other colors to your writing.

## Text Colors

You can emphasize individual words or phrases with color:

- <span class="text-turquoise">**Turquoise surf**</span> for cool highlights
- <span class="text-cerulean">**Cerulean blue**</span> for professional emphasis
- <span class="text-amber">**Bright amber**</span> for warm attention-grabbing text
- <span class="text-scarlet">**Primary scarlet**</span> for important warnings or key points

## Background Highlights

For more emphasis, you can highlight entire phrases:

<span class="highlight-turquoise">This is highlighted in turquoise</span>

<span class="highlight-amber">This stands out with bright amber</span>

<span class="highlight-scarlet">This demands attention with scarlet</span>

## Emphasis Boxes

For important information, use emphasis boxes:

<div class="emphasis-turquoise">
<strong>💡 Research Insight:</strong> This is perfect for highlighting key findings or important research notes using your turquoise color.
</div>

<div class="emphasis-amber">
<strong>⚡ Important:</strong> Use amber boxes for warnings, important deadlines, or things that need immediate attention.
</div>

<div class="emphasis-scarlet">
<strong>🚨 Critical:</strong> Scarlet boxes are perfect for urgent information, error messages, or critical warnings.
</div>

## How to Use These in Your Content

### Method 1: Inline HTML in Markdown

```markdown
This is normal text with <span class="text-scarlet">scarlet emphasis</span> in the middle.
```

### Method 2: CSS Classes

```html
<span class="text-turquoise">**Bold turquoise text**</span>
<span class="highlight-amber">Highlighted amber text</span>
```

### Method 3: Emphasis Boxes

```html
<div class="emphasis-turquoise">
<strong>Title:</strong> Your important content here.
</div>
```

### Method 4: Direct CSS (Advanced)

```html
<span style="color: var(--primary-scarlet); font-weight: bold;">
Custom scarlet text
</span>
```

## Available Color Classes

### Text Colors:
- `.text-turquoise` - <span class="text-turquoise">Turquoise surf</span>
- `.text-cerulean` - <span class="text-cerulean">Cerulean blue</span>
- `.text-amber` - <span class="text-amber">Bright amber</span>
- `.text-scarlet` - <span class="text-scarlet">Primary scarlet</span>

### Highlights:
- `.highlight-turquoise` - <span class="highlight-turquoise">Turquoise highlight</span>
- `.highlight-amber` - <span class="highlight-amber">Amber highlight</span>
- `.highlight-scarlet` - <span class="highlight-scarlet">Scarlet highlight</span>

### Emphasis Boxes:
- `.emphasis-turquoise` - For insights and information
- `.emphasis-amber` - For important notices
- `.emphasis-scarlet` - For critical warnings

## Physics Examples

Here's how you might use these in your physics content:

The <span class="text-turquoise">**quantum coherence time**</span> in our superconducting circuits was measured to be <span class="highlight-amber">T₂ = 45 μs</span>.

<div class="emphasis-scarlet">
<strong>⚠️ Safety Note:</strong> Always ensure proper microwave power levels when working with superconducting qubits to avoid decoherence.
</div>

<div class="emphasis-turquoise">
<strong>🔬 Research Finding:</strong> We observed strong coupling between photons and artificial atoms with coupling strength g/2π = 200 MHz.
</div>

The colors automatically adapt to light and dark themes, so they'll always look great! 🎨