(function(window){
  const deployerVariable = {
    ADMIN_IS_OPEN: 'aaa',
    CSA_IS_OPEN: 'bbb',
  }
  Object.freeze(deployerVariable);
  window.deployVariable = deployerVariable
  Object.defineProperty(window, 'deployVariable', {
    writable: false
  })
})(window)
