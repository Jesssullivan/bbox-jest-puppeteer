const timeout = 10000

describe(
  '/ (Visual: Lab Of Ornithology Homepage)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://www.birds.cornell.edu/home/')
    }, timeout);

    afterAll(async () => {
      await page.close()
    });

    it("\nShould load without error.\n MUST contain word 'birds'.", async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('birds')
    })
  },
  timeout
)
