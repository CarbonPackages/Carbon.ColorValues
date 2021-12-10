# Color Values Editor for Neos CMS

[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

## Introduction

This package provides a Color Value Editor which can be used in Neos CMS.

It was inspired by [Shel.Neos.ColorPicker], but with the difference that not the color values get saved, but the given key. And it just provides a list of colors, nothing more.

## Example

![example]

## Installation

Run this in your site package

```bash
composer require --no-update carbon/colorvalues
```

Then run `composer update` in your project directory.

## How to use

Add a property of type string and configure the editor as seen in this example:

```yaml
"Foo.Bar:Content.Text":
  properties:
    color:
      type: string
      ui:
        label: Color
        reloadIfChanged: true
        inspector:
          editor: "Carbon.ColorValues/Editor"
          editorOptions:
            disabled: false
            # Hides the reset button if set to false
            allowEmpty: true
            values:
              main:
                label: Primary
                color: "#95c11f"
              gray:
                label: Gray
                color: gray
              transparent:
                label: Transparent
                color: transparent
              disabledColor:
                label: Disabled color
                color: red
                disabled: true
```

## Contributions

Contributions are very welcome!

Please create detailed issues and PRs.

[packagist]: https://packagist.org/packages/carbon/colorvalues
[latest stable version]: https://poser.pugx.org/carbon/colorvalues/v/stable
[total downloads]: https://poser.pugx.org/carbon/colorvalues/downloads
[license]: https://poser.pugx.org/carbon/colorvalues/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.ColorValues.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.ColorValues/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.ColorValues/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.ColorValues/subscription
[shel.neos.colorpicker]: https://github.com/Sebobo/Shel.Neos.ColorPicker
[example]: https://user-images.githubusercontent.com/4510166/145633157-afbaddb9-2005-4d1b-84fb-fb0d37000ebb.mp4
