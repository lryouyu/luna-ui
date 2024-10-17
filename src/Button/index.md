# 按钮 Button

一个可复用的 按钮 组件，支持自定义尺寸，颜色，点击事件等。

## 图标列表

本组件库 建议使用 react-icons 图标库

## 安装方法

```bash
pnpm add react-icons

或者

npm install react-icons
```

## 使用示例

## 默认样式

```jsx
import { Button } from 'luna-ui';
import { FaBeer } from 'react-icons/fa';

export default () => (
  <div style={{ display: 'flex', gap: '10px', padding: 20 }}>
    <Button type="primary">button</Button>
    <Button type="warning">button</Button>
    <Button type="danger">button</Button>
    {/* 默认为 default */}
    <Button color="red">button</Button>
  </div>
);
```

## 按钮禁用

```jsx
import { Button } from 'luna-ui';

export default () => (
  <div style={{ padding: 20 }}>
    <Button type="primary" disabled={true}>
      button
    </Button>
  </div>
);
```

## 图标方向

可以在左侧或右侧显示图标，默认为左侧。

图标颜色与字体颜色一致。

```jsx
import { Button } from 'luna-ui';
import { AiOutlineSearch } from 'react-icons/ai';

export default () => (
  <div style={{ display: 'flex', gap: '10px', padding: 20 }}>
    {/* 默认文字方向在文字左侧 图标颜色与字体一致*/}
    <Button type="primary" icon={<AiOutlineSearch />}>
      搜索
    </Button>
    <Button
      type="primary"
      iconPosition="right"
      icon={<AiOutlineSearch />}
      textColor="#000"
    >
      搜索
    </Button>
  </div>
);
```

## 属性

| 参数         | 说明                                                 | 类型        | 默认值  |
| ------------ | ---------------------------------------------------- | ----------- | ------- |
| className    | 用户自定义的类名                                     | string      | -       |
| color        | 按钮的背景颜色                                       | string      | #000000 |
| icon         | 用户传入的图标元素（如 SVG 或 React 图标）           | JSX.Element | 必填    |
| size         | 按钮文字尺寸，单位为 px                              | number      | 24      |
| type         | 颜色类型，可选值为 primary、warning、danger、default | string      | default |
| iconPosition | 图标位置，可选值为 left、right                       | string      | left    |
| disabled     | 禁用状态                                             | boolean     | false   |
| textColor    | 文本颜色，默认为白色                                 | string      | #ffffff |

## Api

| 名称    | 说明         | 类型       |
| ------- | ------------ | ---------- |
| onClick | 按钮点击事件 | () => void |
