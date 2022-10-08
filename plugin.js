/**
 * 
 * /plugin/xxx.js
 */
class xxPlugin{
  constructor(options){
    this.options = options
  }
  apply(compiler){
    compiler.hooks.compilation.tap('xxPlugin',compilation=>{
      compilation.hooks.processAssets.tap('xxPlugin',()=>{
        for(const chunk of compilation.chunks){
          for(const file of chunk.files){
            const comment = `/* ${this.options.banner} */`
            // const {ConcatSource}  = require('webpack-sources')
            compilation.updateAssets(file,old => new ConcatSource(old,'\n',comment))
          }
        }
      })
    })
  }
}

module.exports = xxPlugin
