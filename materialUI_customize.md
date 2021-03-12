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

## Combo box

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

```js
// sample of picker
import "date-fns"
import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers"

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  )

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
```

## 参考

- Typography https://material-ui.com/api/typography/l
- Grid https://material-ui.com/components/grid/#limitations
- Text Field https://material-ui.com/components/text-fields/
- Autocomplete(combo box) https://material-ui.com/components/autocomplete/
- Date/Time picker https://material-ui.com/components/pickers/#date-time-pickers
