// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test suma', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test suma', async function() {
    await driver.get("http://127.0.0.1:5500/fundamentos/calculadora/calculadora.html")
    await driver.manage().window().setRect({ width: 974, height: 778 })
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(1) > .num")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2) > .num")).click()
    await driver.findElement(By.css("tr:nth-child(5) .operation")).click()
    await driver.findElement(By.css("tr:nth-child(4) > td:nth-child(2) > .num")).click()
    assert(await driver.findElement(By.id("acumulado")).getText() == "12+")
    assert(await driver.findElement(By.id("resultado")).getText() == "5")
    await driver.findElement(By.id("igual")).click()
    assert(await driver.findElement(By.id("acumulado")).getText() == "12+5=")
    assert(await driver.findElement(By.id("resultado")).getText() == "17")
    await driver.findElement(By.css("tr:nth-child(5) .operation")).click()
    assert(await driver.findElement(By.id("acumulado")).getText() == "17+")
    assert(await driver.findElement(By.id("resultado")).getText() == "17")
    await driver.findElement(By.css("tr:nth-child(5) .operation")).click()
    await driver.findElement(By.css("tr:nth-child(5) .operation")).click()
    assert(await driver.findElement(By.id("resultado")).getText() == "17")
    await driver.findElement(By.id("igual")).click()
    assert(await driver.findElement(By.id("resultado")).getText() == "34")
    assert(await driver.findElement(By.id("acumulado")).getText() == "17+17=")
  })
})
