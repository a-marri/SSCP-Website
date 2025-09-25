# Stanford Solar Car Project Website

A modern, responsive website featuring a component-based architecture for easy maintenance and updates.

## Quick Start

1. **Clone or download** this repository
2. **Serve the files** using a local web server (required for component loading):
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Open your browser** and navigate to `http://localhost:8000`

## Project Structure

```
SSCP Onboarding Website/
├── assets/                   # All static assets
│   ├── css/                 # Stylesheets
│   │   ├── styles.css       # Main stylesheet
│   │   └── styles-clean.css # Clean version
│   ├── js/                  # JavaScript files
│   │   ├── script.js        # Main functionality
│   │   └── component-loader.js # Component system
│   └── images/              # Organized image assets
│       ├── faculty/         # Faculty photos
│       ├── race-photos/     # Race and team photos
│       └── sponsors/        # Sponsor logos
├── components/              # Reusable HTML components
│   ├── navigation.html      # Navigation menu (root pages)
│   ├── navigation-pages.html # Navigation menu (sub-pages)
│   └── footer.html         # Footer
├── pages/                   # Individual page files
│   └── *.html              # All page files (see current pages below)
├── index.html              # Homepage
├── template.html           # Template for new pages
└── README.md              # This file
```

### Current Pages
*Note: This list is automatically maintained. See "Maintaining This README" section below.*

- `contact.html` - Contact page
- `faculty.html` - Faculty advisors
- `join.html` - Join the team
- `sponsors.html` - Our sponsors
- `team.html` - Team members
- `team-history.html` - Team history

## Component System

This website uses a component-based architecture that allows you to maintain common elements (navigation, footer) in one place and automatically include them across all pages.

### How It Works

- **Navigation** and **Footer** are stored in separate HTML files in the `components/` directory
- The `component-loader.js` script automatically loads these components into designated containers
- Active navigation states are automatically set based on the current page
- No need to update every single page when making changes to common elements
- Different navigation components are used for root pages vs. sub-pages (in `pages/` directory)

### Component Files
- `navigation.html` - Used for root-level pages (index.html)
- `navigation-pages.html` - Used for pages in the `pages/` directory
- `footer.html` - Used across all pages

## Adding New Pages

### Step 1: Use the Template
Copy `template.html` and rename it to your new page in the `pages/` directory:
```bash
cp template.html pages/new-page.html
```

### Step 2: Customize the Content
1. Update the `<title>` tag
2. Replace the hero section content
3. Add your page-specific content in the main sections
4. Update any image references to use the new organized structure:
   - Race photos: `../assets/images/race-photos/`
   - Sponsor logos: `../assets/images/sponsors/`
   - Faculty photos: `../assets/images/faculty/`

### Step 3: Add to Navigation
Edit both navigation components and add your new page:
- `components/navigation.html` (for root pages):
  ```html
  <a href="pages/new-page.html" class="nav-link" data-page="new-page">New Page</a>
  ```
- `components/navigation-pages.html` (for sub-pages):
  ```html
  <a href="new-page.html" class="nav-link" data-page="new-page">New Page</a>
  ```

### Step 4: Update Page Mapping
Add your new page to the `pageMap` in `component-loader.js`:
```javascript
const pageMap = {
    'index': 'home',
    'new-page': 'new-page'  // Add your new page here
};
```

### Step 5: Update README
Add your new page to the "Current Pages" section above to keep documentation current.

## Styling

The website uses a comprehensive CSS system with:
- **Responsive design** that works on all devices
- **Modern typography** using SF Pro fonts
- **Consistent color scheme** with Stanford red (#8B0000) accents
- **Smooth animations** and hover effects
- **Mobile-first approach** with progressive enhancement

### Key CSS Classes

- `.hero` - Full-screen hero sections
- `.section-fade` - Content sections with fade-in animation
- `.container` - Centered content container (max-width: 1200px)
- `.section-header` - Standardized section headers
- `.btn-primary` / `.btn-secondary` - Button styles

## Customization

### Adding New Components

1. **Create component file** in `components/` directory:
   ```html
   <!-- components/sidebar.html -->
   <aside class="sidebar">
       <h3>Quick Links</h3>
       <ul>
           <li><a href="#section1">Section 1</a></li>
       </ul>
   </aside>
   ```

2. **Add container** to pages where needed:
   ```html
   <div id="sidebar-container"></div>
   ```

3. **Load the component** in `component-loader.js`:
   ```javascript
   async loadAllComponents() {
       await this.loadComponent('navigation', '#navigation-container');
       await this.loadComponent('footer', '#footer-container');
       await this.loadComponent('sidebar', '#sidebar-container');
   }
   ```

### Updating Navigation

Edit `components/navigation.html` to:
- Add new menu items
- Update existing links
- Modify navigation structure
- Change styling classes

### Updating Footer

Edit `components/footer.html` to:
- Add new footer links
- Update contact information
- Modify social media links
- Change footer content

## Maintaining This README

To keep this README accurate as the project evolves, follow these guidelines:

### When Adding New Pages
1. Add the page to the "Current Pages" section above
2. Update the page mapping in `component-loader.js` if needed
3. Ensure both navigation components are updated

### When Removing Pages
1. Remove the page from the "Current Pages" section
2. Remove the page from both navigation components
3. Remove the page from the `pageMap` in `component-loader.js`
4. Delete the page file from the `pages/` directory

### When Adding New Components
1. Add the component to the project structure diagram
2. Update the "Component Files" section
3. Document how to use the new component

### Automated Maintenance (Optional)

For larger projects, consider creating a simple script to automatically update the README:

```bash
#!/bin/bash
# update-readme.sh - Simple script to update the Current Pages section

echo "### Current Pages" > temp_pages.md
echo "*Note: This list is automatically maintained. See \"Maintaining This README\" section below.*" >> temp_pages.md
echo "" >> temp_pages.md

for file in pages/*.html; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .html)
        # Extract title from HTML file (basic approach)
        title=$(grep -o '<title>[^<]*</title>' "$file" | sed 's/<title>//;s/</title>//')
        if [ -z "$title" ]; then
            title="$filename"
        fi
        echo "- \`$filename.html\` - $title" >> temp_pages.md
    fi
done

# Replace the Current Pages section in README.md
# (This is a simplified example - you'd need more sophisticated text replacement)
```

### Manual Checklist
When making changes to the project structure:
- [ ] Update "Current Pages" section
- [ ] Update project structure diagram if needed
- [ ] Update component documentation
- [ ] Update navigation components
- [ ] Update page mapping in component-loader.js
- [ ] Test that all pages load correctly
