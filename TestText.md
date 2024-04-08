- CSS（层叠样式表）可以通过几种不同的方式与HTML文档相关联，来为网页添加样式。以下是将CSS与HTML关联的三种主要方法：
- ### 内联样式
  logseq.order-list-type:: number
  
  将CSS直接写在HTML元素的`style`属性中。这种方法适用于单个元素的样式，但不推荐用于整个网页，因为它不符合样式与内容分离的原则。  
  
  ```html
  <p style="color: blue; font-size: 18px;">这是带有内联样式的文本。</p>
  ```
- ### 内部样式表
  logseq.order-list-type:: number
  
  将CSS写在HTML文档的`<head>`部分的`<style>`标签内。这适用于单个页面的样式定义。  
  
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <style>
        p {
            color: green;
            font-size: 16px;
        }
    </style>
  </head>
  <body>
    <p>这是带有内部样式表的文本。</p>
  </body>
  </html>
  ```
- ### 外部样式表
  logseq.order-list-type:: number
  
  将CSS写在一个单独的文件中，通常以`.css`为扩展名，然后通过`<link>`标签在HTML文档的`<head>`部分引入。这是最推荐的方法，因为它可以在多个页面中重用样式表，使得样式的管理变得更加集中和高效。  
	- 创建一个CSS文件（例如`style.css`）:
	  logseq.order-list-type:: number
	    
	  ```css
	  /* style.css文件内容 */
	  body {
	   background-color: lightgrey;
	  }
	  
	  h1 {
	   color: navy;
	   margin-left: 20px;
	  }
	  ```
	- 在HTML中引用这个CSS文件：
	  logseq.order-list-type:: number
	    
	  ```html
	  <!DOCTYPE html>
	  <html>
	  <head>
	   <link rel="stylesheet" type="text/css" href="style.css">
	  </head>
	  <body>
	   <h1>这是带有外部样式表的文本。</h1>
	  </body>
	  </html>
	  ```
- 通过这些方法，可以有效地将CSS样式应用到HTML文档中，以控制网页的布局和外观。在实际开发中，通常推荐使用外部样式表，因为它提高了样式的复用性并且可以减少HTML文档的大小。


CSS（层叠样式表）可以通过几种不同的方式与HTML文档相关联，来为网页添加样式。以下是将CSS与HTML关联的三种主要方法：

### 1. 内联样式

将CSS直接写在HTML元素的`style`属性中。这种方法适用于单个元素的样式，但不推荐用于整个网页，因为它不符合样式与内容分离的原则。

```html
<p style="color: blue; font-size: 18px;">这是带有内联样式的文本。</p>
```

### 2. 内部样式表

将CSS写在HTML文档的`<head>`部分的`<style>`标签内。这适用于单个页面的样式定义。

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: green;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>这是带有内部样式表的文本。</p>
</body>
</html>
```

### 3. 外部样式表

将CSS写在一个单独的文件中，通常以`.css`为扩展名，然后通过`<link>`标签在HTML文档的`<head>`部分引入。这是最推荐的方法，因为它可以在多个页面中重用样式表，使得样式的管理变得更加集中和高效。

1. 创建一个CSS文件（例如`style.css`）:

   ```css
   /* style.css文件内容 */
   body {
       background-color: lightgrey;
   }

   h1 {
       color: navy;
       margin-left: 20px;
   }
   ```

2. 在HTML中引用这个CSS文件：

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <link rel="stylesheet" type="text/css" href="style.css">
   </head>
   <body>
       <h1>这是带有外部样式表的文本。</h1>
   </body>
   </html>
   ```

通过这些方法，可以有效地将CSS样式应用到HTML文档中，以控制网页的布局和外观。在实际开发中，通常推荐使用外部样式表，因为它提高了样式的复用性并且可以减少HTML文档的大小。