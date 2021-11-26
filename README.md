# React Crypto Tracker

There are a couple of common cases in React where we want to use the Effects hook in React, and we're going to build a [crypto tracker](./images/crypto-tracker.gif) to practise these. You'll have to use Fetch and setInterval, and most importantly, figure out when to use them with `useEffect`!

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Finally, type `npm run start`, which starts a development server that runs your website in the browser. That server will reload your website whenever you make any changes to source files

## Instructions

- **Make sure you check the existing code, ex. components, props, etc**
- You will find a file called `constants.js` with **all the URLs** for your fetches. You just need to import them where needed
- **Make sure to check what are the responses from these fetches**
- Display the Side List with each one of the coins
    - You will have to use a fetch to the `CRIPTO_LIST` URL
    - Use the `SideListItem` component to display each individual item
    - When you click on a coin, you should display its info in the Main Section
- Display the Main Section
    - You should display here the info of the selected coin from the Side List
- Display the News Section
    - You will have to use a fetch to the `STATUS_UPDATES` URL
    - Use the `NewsCard` to display each news item  
- Finish the Main Section
    - Display the time that has passed since the coin data was updated on the server
    - To achieve this, use the `last_updated` key from each Coin Item object together with a setInterval

## Tips

- **Have a look at all of the starter code!** There are some components there that you can use
- **Read any comments you find carefully**
- Think of useEffect as something that will happen inside of your component and have some kind of **side effect**

## Extra Challenge 1

Add another `useEffect` that will trigger a fetch that updates the price of the current displaying coin. The fetch should be to the `getCriptoUpdateUrl` that you'll find in `constants`. Display also a counter that tells the user the elapsed time until the next update. You can find a template for the update section in the `templates` folder

## Extra Challenge 2

Add a start/pause button to the update section.Wwhen you press the button, it should start the timer for the next update. If you press the button again it should pause the update counter, keeping the remaining time for the next update.
