Load different images based on your window settings.

## Based on window's <strong>width</strong>

```html
<picture width="200" height="200">
  <source size="max-width: 400" src="http://fakeimg.pl/400/">
  <source size="max-width: 800" src="http://fakeimg.pl/800/">
  <source src="http://fakeimg.pl/1000/">
</picture>
```

## Based on window's <strong>height</strong>

```html
<picture width="200" height="200">
  <source size="max-height: 200" src="http://fakeimg.pl/200/">
  <source size="max-height: 400" src="http://fakeimg.pl/400/">
  <source src="http://fakeimg.pl/800/">
</picture>
```

## Based on window's <strong>pixel density</strong>

```html
<picture width="200" height="200">
  <source dpi="2" src="http://fakeimg.pl/900/">
  <source src="http://fakeimg.pl/450/">
</picture>
```

## Mix them up at will!

```html
<picture width="200" height="200">
  <source dpi="2" src="http://fakeimg.pl/900/">
  <source size="max-width: 400, max-height: 200" src="http://fakeimg.pl/400x200">
  <source size="max-width: 800, max-height: 400" src="http://fakeimg.pl/800x400">
  <source src="http://fakeimg.pl/1000x800">
</picture>
```

## Use it for all your images!

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
