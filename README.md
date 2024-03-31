
# My Site

This is my personal web site.

Take a look here: [`julio-salas.com`](https://julio-salas.com/)

## Some features:
Technologies section:  

![mooving-logos](https://github.com/juliosalas89/my-site/assets/95373869/929c8052-7c27-4d30-9005-ac6f25fd5e0c)

I had a lot of fun developing this section.  
Icons move in random directions all at the same speed, when they reach the edges of the rectangle they bounce as balls and continue their paths.  
It looks very simple but to get this effect I had to apply a complex mix of pitagoras and JavaScript haha.  
Also they are interactive, so when you click one of them they all move to make space for a detailed description of my experience with that particular technology.  
[`Check the component here`](https://github.com/juliosalas89/my-site/blob/master/src/components/technologies/TechIcon.jsx).

## How to run the development server

First of all install dependencies.
In the root file execute:
```bash
npm install
```

Now you can start development server by executing:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Troubleshooting:

If anything goes wrong during installation or execution, do the following:
1- Remove node_modules directory.
2- Remove package-lock.json file if exists.
3- Install again using these versions: 
    node v18.16.0 or similar
    npm v9.8.1