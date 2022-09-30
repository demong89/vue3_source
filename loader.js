
/**
 * 自定义了loader 
 * 文件规范 loader/xxx.js
 * 
 */

 const reg = /<script>([\s\S]+?)<\/script>/;
module.exports = function(source){
  console.log('loader 执行了');
  const _source = source.match(reg)

  return _source && _source[1]?_source[1]:_source
}

// if(require.main===module){ // 测试时使用

// }
