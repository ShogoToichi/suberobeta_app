# material UI デザインカスタマイズ

# Typography

- align: `'inherit', 'left', 'center', 'right', 'justify'`
- color:
- display:
- paragraph:
- variant:

# Grid

## Grid container

- direction: `'row', 'row-reverse', 'column', 'column-reverse'`
- justify: ``
- alignItems: ``
- spacing: `{0} ... {10}`
  output(spacing) = spacing \* 8px, e.g. spacing={2} creates a 16px wide gap.

## Grid item

- xs/sm/md/lg/xl: `{1} ~ {12}`
-

# Autocomplete

```js
// example of combo box
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

return (
  <Autocomplete
    id="combo-box-demo"
    options={top100Films}
    getOptionLabel={(option) => option.title}
    style={{ width: 300 }}
    renderInput={(params) => (
      <TextField {...params} label="Combo box" variant="outlined" />
    )}
  />
)
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 }
]
```

# Date / Time picker

使えなかった．

# Rating

```js
import Rating from "@material-ui/lab/Rating"
return(
  <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
  <Rating name="read-only" value={value} readOnly />
)
```

# Menu

```js
import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
```

# Sellect

```js
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

;<FormControl className={classes.formControl}>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
```

## 参考

- Typography https://material-ui.com/api/typography/l
- Grid https://material-ui.com/components/grid/#limitations
- Text Field https://material-ui.com/components/text-fields/
- Autocomplete https://material-ui.com/components/autocomplete/
- Rating https://material-ui.com/components/rating/
- Menu https://material-ui.com/components/menus/
- Sellect https://material-ui.com/components/selects/
