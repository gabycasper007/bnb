This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the implementation

1. This project was implemented using **Context API** because I don't expect the user to change the theme often.
If the user wants to have more fine grain control over the theme, I would use Redux instead.

2. By clicking the button you will **switch between 2 themes** (like Binance has 2 themes... light and dark.)
I save the theme in localStorage to keep the user selection.

3. The app is **responsive**, changing layout on smaller screens.

4. I have used functional components with **hooks**, but I can also use class components if you have legacy code.

5. I have used **SASS modules** for general styling that I don't expect the user to want to change.

6. I use **ESLint** and **Prettier** in order to enforce consistent rules and formatting to keep the project easy to maintain

7. For components, I use an [Atomic](https://atomicdesign.bradfrost.com/chapter-2/) folder structure

## Start the app

Run `yarn start` to run the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
