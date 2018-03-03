# Capstone Planning Continued

Today you'll continue the capstone planning process you began last Friday. For reference, here are the planning steps from last week's prompt:

In our first week of React we read Thinking in React. Back then we hadn't yet learned about things like unidirectional data flow, state management, Redux, and more. But now that we've learned these concepts and tools it's time to revisit this resource to begin our capstone projects.

You'll spend the next two Fridays planning, designing, and beginning to develop your capstone project using the steps from Thinking in React.

## Capstone Planning

First, create a capstone project planning repo. Include a Project Description section in its README containing the project proposal you submitted earlier this week.

Then re-read and review recommended the steps for building React projects in the Thinking in React article. These include:

1. Break the UI into a Component Hierarchy
2. Build A Static Version in React
3. Identify The Minimal (but complete) Representation Of UI State
4. Identify Where Your State Should Live
5. Add Inverse Data Flow

We'll use these steps to plan and develop our capstones over the next two Fridays.

## 1. Break the UI into a Component Hierarchy

It's more efficient to build a React app when you know what your user interface will look like. This allows us to anticipate what components we need, what their relationships will be, and where we'll later lift state.

Explore how you'll lay out your capstone. Ask yourself "What experience do I want for my user?" Let this answer guide you in planning the project's appearance and layout. This can be as little as whiteboard drawings, or as much as mocking the site with outside tools. Consider what routes you'll use, and where different information and features should appear. Because your component structure depends on your UI, each portion of that UI should be planned before moving on.

After outlining a layout/design you're happy with, sketch out the corresponding component structure in a diagram.

* Add the visual representation of your layout/appearance and a component tree diagram to your repo before advancing.

## 2. Build a Static Version

Using your component tree diagram, build a static version of the app using only functional components. Hard-code any data you plan on eventually receiving from APIs, databases, Redux, or other sources for now.

* Before advancing, add a link to your static site's repo to your planning repo.

## 3. Identify the Minimum (But Complete!) Representation of UI State

Now that your application is more than just user stories, carefully consider how you'll organize its state. Outline what state slices you'll need, and how they'll be structured. Be careful here; incorrectly structured state can later lead to tricky issues.

* Add a list of state slices your application requires and how they will be structured to your planning repo before moving to the next step.

## 4. Identify Where State Should Live (AKA Lifting State)

Then, determine where you'll lift this state. After that, refactor your tree of static components to include these state values in the locations you identified. Remember, even if you'll later use Redux the rules of lifting state still apply.

* Before advancing identify where your state will be lifted in your planning repo. You could do this in a list, by adding indicators to your component diagram, or any other format. Then, add that state to your static project.

## 5. Inverse Data Flow (ie: basically everything else)

What the article calls "inverse data flow" is actually the process of integrating all other backend/business logic into your UI. If you've followed these steps carefully, your UI will be ready for this.

But do not tackle this until all previous steps are complete! It may be tempting, but this process exists in this order because it's decidedly the most intuitive, efficient way to develop React projects.

Also, keep in mind we don't expect you to complete your entire capstone before next Friday! You'll have all of week 5 to continue integrating "inverse data flow" and all other tools and features your project needs.

## Objectives

Step 5 does not have to be 100% complete today (as you know, you'll continue developing this capstone next week), but today's submission will be graded on the list of objectives included in this prompt.

<hr/>

## Objectives

Your project will be reviewed on the following objectives:

* Includes visual representation of the capstone's planned layout/appearance.

* Includes visual of project's component tree.

* Includes repo containing static version of the application.

* Static version uses only stateful components.

* Static site follows best practices and all relevant previous objectives.

* Planning repo lists all planned state, details how state will be structured and lifted.

* Project was submitted by the Friday deadline.

* Project demonstrates an understanding of all React concepts. If prompted, you can discuss your code with an instructor using the correct terminology.
