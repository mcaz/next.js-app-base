# CssStyle

BEMをベースに[emotion](https://github.com/emotion-js/emotion)のオブジェクト記法に合わせて命名規則を変更

## Block
- アッパーキャメルで統一
- 単語の区切り```-```をキャメルで代用
___
``` html
<div clas="block-tag"></div>
```
```
# BEM
.block-tag

# emotion
BlockTag
```

## Element
- アッパーキャメルで統一
- ブロックとの区切り```__```をそのまま利用
___
``` html
<div clas="block">
  <div clas="block__item-element"></div>
</div>
```
```
# BEM
.block
.block__item-element

# emotion
Block
Block__ItemElement
```

## Modifier
- lowerキャメルで統一
- モディファーの区切り```--```を```_```で代用
- 単語の区切り```-```をキャメルで代用
___
``` html
<div clas="block">
  <div clas="block__item-element"></div>
</div>
<div clas="block block--red">
  <div clas="block__item-element"></div>
  <div clas="block__item-element block__item-element--red-color"></div>
  <div clas="block__item-element block__item-element--blue-color"></div>
</div>
```

```
# BEM
.block {}
.block_red {}
.block__item-element { }
.block__item-element--red-color {}
.block__item-element--blue-color {}

# emotion
Block
Block_red
Block__ItemElement
Block__ItemElement_redColor
Block__ItemElement_blueColor
Block__ItemElement_yellowColor
```
