Load different images based on your window settings.

## Based on window's <strong>width</strong>
Try resizing your window under 800px width and then under 400px width.

```html
<picture width="200" height="200">
  <source size="max-width: 400" src="http://fakeimg.pl/400/">
  <source size="max-width: 800" src="http://fakeimg.pl/800/">
  <source src="http://fakeimg.pl/1000/">
</picture>
```

## Based on window's <strong>height</strong>
Try resizing your window under 400px height and then under 200px height.

```html
<picture width="200" height="200">
  <source size="max-height: 200" src="http://fakeimg.pl/200/">
  <source size="max-height: 400" src="http://fakeimg.pl/400/">
  <source src="http://fakeimg.pl/800/">
</picture>
```

## Based on window's <strong>pixel density</strong>
Try using a retina display to see an image twice the size (900px instead of 450px).
Note: Some browsers allow you to see double dpi when you zoom in enough.

```html
<picture width="200" height="200">
  <source dpi="2" src="http://fakeimg.pl/900/">
  <source src="http://fakeimg.pl/450/">
</picture>
```

## Mix them up at will!
You can add as much sources as you want. Please note that in case of conflict, the last one declared will show.

```html
<picture width="200" height="200">
  <source dpi="2" src="http://fakeimg.pl/900/">
  <source size="max-width: 400, max-height: 200" src="http://fakeimg.pl/400x200">
  <source size="max-width: 800, max-height: 400" src="http://fakeimg.pl/800x400">
  <source src="http://fakeimg.pl/1000x800">
</picture>
```

## Use it for all your images!
Multiple images with different sizes can be set in case you need them.

```html
<picture width="200" height="200">
  <source size="max-width: 1000" src="http://fakeimg.pl/800">
  <source src="http://fakeimg.pl/900">
</picture>
<picture width="200" height="200">
  <source size="max-width: 950" src="http://fakeimg.pl/750">
  <source src="http://fakeimg.pl/900">
</picture>
<picture width="200" height="200">
  <source size="max-width: 900" src="http://fakeimg.pl/700">
  <source src="http://fakeimg.pl/900">
</picture>
<picture width="200" height="200">
  <source size="max-width: 850" src="http://fakeimg.pl/650">
  <source src="http://fakeimg.pl/900">
</picture>
<picture width="200" height="200">
  <source size="max-width: 800" src="http://fakeimg.pl/600">
  <source src="http://fakeimg.pl/900">
</picture>
```
