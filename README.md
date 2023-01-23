# react-native (v1.2)
2023.01.22



## in this branch (v1.2)

* [x] button, img, inputtext, view, text, style, 
* [x] [fetch api](https://reactnative.dev/docs/network)
* [ ] navigate between pages (router). [docs](https://reactnative.dev/docs/navigation) does not work!


## Run
 
* development mode: `yarn run android`
* clear metro cache: `yarn start --port 8084 --reset-cache`



## Notes

* [Build APK](README/1.md)
* [ReactNative syntax notes](README/2.md)



## WP Rest API

```js
    // ?_fields=author,id,excerpt,title,link
    // _embed=true
    // 

    // http://juniorfrontend.ir/wp-json/wp/v2/categories?per_page=100&_fields=id,name
    // array
    // item.id
    // item.name

    // categories=163
    // http://juniorfrontend.ir/wp-json/wp/v2/posts?per_page=100&_fields=id,title&categories=163
    // array
    // item.id
    // item.title.rendered
    // item.content.rendered (html)

    // http://juniorfrontend.ir/wp-json/wp/v2/posts/3842?_fields=id,title,content
    // object
    // title.rendered
    // content.rendered

```
