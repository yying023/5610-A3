module.exports = {
    // 匹配的文件路径，该路径匹配器配置可在这里进行设置
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  
    // 要转换的文件类型，这里使用 Babel 转换器将 ES6+ 转换为 ES5
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
  
    // 覆盖默认的测试运行器，这里我们将测试结果转换为 Jest 默认的格式
    testResultsProcessor: "jest-sonar-reporter",
  };