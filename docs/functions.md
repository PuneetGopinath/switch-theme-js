<h2 align="center">BK Switch Theme JS Docs - Functions</h2>

# Functions

## 1. switchTheme.switch
Switches the theme and adds the theme name to the `data-theme` attribute of html tag. It also logs that we switched the theme, i.e. `console.log("Switched theme to: " + theme);`

### Args
1. theme - The theme name

### Return value
Returns null

## 2. switchTheme.get
Gets the theme name from the cookie stored, and if the theme name is not empty, it switches the theme. Just call this function on body load, so that if cookie is set it switches the theme.

### Args
No args

### Return value
Returns string
