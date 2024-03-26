function hermes(){
    if (isHermes()) {
        console.log('Running in Hermes environment');
      } else {
        console.log('Not running in Hermes environment');
      }

};

function checkJavaScriptEngine() {
    const engine = typeof navigator === 'object' && navigator.product === 'ReactNative' ? 'Hermes' : 'JavaScriptCore';
    console.log(`Running in ${engine} environment`);

  }
const isHermes = () => !!global.HermesInternal;
hermes();
checkJavaScriptEngine();