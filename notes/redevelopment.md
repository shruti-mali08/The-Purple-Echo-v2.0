## Features Checklist 
- [x] Scroll To Top Button 
- [x] Clearly reference the credits of media utilized in the website. 

- Navigation Bar
    - [x] Drop-down Menu
    - [x] Hover Animation

1. Home Page
    - [x] Hero
    - [ ] Meet the Artist
        - [x] Member Cards
        - [x] Member Modal (Added placeholder modals)
            - [x] Open and Close 
            - [x] Displaying Information stored in the JS Array 
            - [x] Carousel Animation for the Images
            - [x] Scroll Animation
            - [x] Show More/Less Button, its Actions, and Animation
            - [x] Adding links to the artist social media profiles
            - [x] Formatting the Modal Using CSS
    - [x] Music Timeline 
        - [x] Slide bar displaying the release of Albums and events 
    - [x] The Message 
    - [ ] Few Stats - ?
    - [x] Future (of the website)
    - [x] Scroll To Top Button
    
2. The Legacy 
    - [ ] Listing all pre-military eras. Links to each era page. Each era page lists the albums. 

3. BTS 2.0 
    - [ ] Arirang album. 

4. Solo Era 
    - [ ] Individual members with links to each page displaying their solo work. 

5. Global Impact
    - [ ] Interactive World Map
    - [ ] Interactive timeline - displays all occurred events 
    - [ ] Philanthropy
    - [ ] 2018 UN, 2022 White House, 2026 Mexico

## Home Page Background 
### Outer Space Theme
- Dark Colors
- Dark background: Black, charcoal, and gray radial gradient
- Stars bright white color 
- The Big Dipper constellation 
    - Connector lines with low opacity
    - 7 main stars bright white with dark maroon/dark violet glow
- Dust/Clouds - dark brown, dark plum colors (minimalist)

#### Layers 

<table>
    <tr>
        <th style="width: 15%">Layer #</th>
        <th style="width: 25%">Layer Name</th>
        <th style="width: 60%">Purpose</th>
    </tr>
    <tr>
        <td>
            Layer 1 
        </td>
        <td>
            The Base (div)
        </td>
        <td>
            A solid dark gray to absolute black gradient
        </td>
    </tr>
    <tr>
        <td>
            Layer 2
        </td>
        <td>
            The Texture/Dust (div)
        </td>
        <td>
            Extremely faint, light blurred shapes using the colors designated for dust/clouds
        </td>
    </tr>
    <tr>
        <td>
            Layer 3
        </td>
        <td>
            The Constellation Lines, The Stars & Glow (svg)
        </td>
        <td>
            Thin, low-opacity lines connecting the coordinates for the 7 core stars. 7 core coordinate points of the Big Dipper, each carrying its own glow (dark violet or dark maroon)
        </td>
    </tr>
    <tr>
        <td>
            Layer 4
        </td>
        <td>
            The Filler Stars (div/canvas)
        </td>
        <td>
            Several stars of different sizes (smaller than the Big Dipper stars) scattered around to fill the void space - twinkling animation
        </td>
    </tr>
    <tr>
        <td>
            Layer 5
        </td>
        <td>
            The UI Layer (div)
        </td>
        <td>
            The website content
        </td>
    </tr>
</table>

----

## Music Timeline Component

### Purpose
The Music Timeline component is a home-page feature that lets users explore BTS releases and major events year by year through an interactive slider.

### Current Implementation
- Built with React and Material UI's Slider component.
- Uses local state to track the currently selected year through the `activeYear` value.
- Reads year-based data from the music timeline data file and renders the matching album releases and events.
- Displays the selected year in the UI and updates the content dynamically as the user moves the slider.

### User Interaction
- The slider ranges from 2013 to 2026.
- Each year change updates the visible content instantly.
- The content area fades in when the selected year changes.
- The slider uses visible year marks for easier navigation.

### Visual Design
- The slider uses a dark violet-to-violet gradient for the rail and track.
- The thumb is styled as a star-shaped icon using CSS `clip-path`.
- On hover, focus, or active interaction, the thumb rotates continuously with a smooth infinite animation.
- The track and thumb movement are animated with easing for a more fluid experience.

### Content Displayed
- For each selected year, the component shows:
  - a list of major events
  - a table of album releases with cover, title, type, date, and description

### Styling Notes
- The component styling is handled in `MusicTimeline.css`.
- The design follows the constellation theme with glowing highlights, soft white accents, and a celestial visual language.

### Planned Improvements
- Add smoother keyboard accessibility for the slider.
- Improve mobile responsiveness for the table layout.
- Add richer year summaries or visual markers for major milestones.

----

