# 图标 Icon

一个可复用的 图标 组件，支持自定义尺寸，颜色，点击事件等。

## 图标列表

本组件库 建议使用 react-icons 图标库

## 安装方法

```bash
pnpm add react-icons

或者

npm install react-icons
```

## 使用示例

```jsx
import { Icon } from 'luna-ui';
import { FaBeer } from 'react-icons/fa';

export default () => <Icon icon={<FaBeer />} />;
```

## 属性

| 参数      | 说明                                       | 类型        | 默认值  |
| --------- | ------------------------------------------ | ----------- | ------- |
| className | 用户自定义的类名                           | string      | -       |
| color     | 图标的颜色                                 | string      | #000000 |
| icon      | 用户传入的图标元素（如 SVG 或 React 图标） | JSX.Element | 必填    |
| size      | 图标尺寸，单位为 px                        | number      | 24      |

## Api

| 名称    | 说明         | 类型       |
| ------- | ------------ | ---------- |
| onClick | 图标点击事件 | () => void |
