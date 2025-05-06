---
title: 手撕eventBus
author: Itway
date: 2023/05/10 22:53
categories:
 - JavaScript知识集
tags:
 - JavaScript
 - 手撕源码
---

# {{ $frontmatter.title }}

```JavaScript
class EventBus {
  constructor() {
      // 消息队列 存储事件和回调
      this.listeners = {};
  }
  /**
   * 订阅事件
   * @param {*} event 
   * @param {*} callback 
   */
  on(event, callback) {
      if (!this.listeners[event]) {
          this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
  }

  /**
   * 注销事件
   * @param {*} event 
   * @param {*} callback 
   * @returns 
   */
  off(event, callback) {
      if (!this.listeners[event]) {
          return;
      }
      this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  /**
   * 发布触发事件
   * @param {*} event 
   * @param  {...any} args 
   * @returns 
   */
  emit(event, ...args) {
      if (!this.listeners[event]) {
          return;
      }
      this.listeners[event].forEach(listener => listener(...args));
  }

  /**
   * 只触发一次的事件
   * @param {*} event 
   * @param {*} callback 
   */
  once(event, callback) {
      if(!this.listeners[event]) {
          this.listeners[event] = [];
      }
      const onceCallback = (...args) => {
          callback(...args);
          this.off(event, onceCallback);
      }
      this.listeners[event].push(onceCallback);
  }

  /**
   * 注销某个事件的所有回调
   * @param {*} event 
   * @returns 
   */
  offAll(event) {
      if (!this.listeners[event]) {
          return;
      }
      this.listeners[event] = [];
  }
};

(function() {
  const eventBus = new EventBus();
  eventBus.on('test', (a, b) => {
      console.log(a, b);
  });
  setTimeout(() => {
      eventBus.emit('test', 1, 2);
  });
})()
```