Styling React Component & Element.

Dynamically set style properties:  
- set green color to show person data.  
- set red color to hide person data.

Setting class name dynamically:  
-> check App.css


Styling with CSS Modules package:
- stop npm server
- commit any changes (if using git)
- Populate project configuration details to gain access to the config files
  ```sh
  npm run eject
  ```
  See `package.json` difference
- Config files will be populated on `config` folder
- Edit `webpack.config.dev.js` and `webpack.config.prod.js`
- Find keyword `loader: require.resolve('css-loader')`
- Add following on `options` attribute
  ```javascript
  modules: true, // enable CSS module
  localIdentName: '[name]__[local]__[hash:base64:5]', //dynamically generate unique CSS class name
  ```  

  
  




Reference  
https://dillinger.io