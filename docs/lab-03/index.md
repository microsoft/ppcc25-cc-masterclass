# Lab 03 - Advanced Custom Connector features

In this lab, you will go through the following tasks:

* Learn about the technical background of connectors
* Make responses and schemas dynamics
* Implementing triggers to Custom Connectors

You will extend the connector you started building in the previous lab.

## 😎 Swagger - The "magic" behind connectors
So far we did all our extension and configurations for our Custom Connector directly in the UI, but there are some more hidden features for which there is no UI (yet). For these let's take a look what's behind the scene of connectors. In the end a Custom Connector is basically a huge YAML file. It's important to know that in the end the file is your connector, so sometimes you will have to check here if things go wrong or you want to use a feature not implemented in the UI.

### Access & Use the Swagger Editor

When editing a Custom Connector you can always view and edit the source file by switching the standard UI editor to the **Swagger Editor**. You do this by activating the toggle for it on the top navigation.

!["Open Swagger Editor"](./assets/0301_01_swaggertoggle.png)

When you do so a new editor loads. You can always switch between the two modes and use whatever editor works best for your next step. Both editors edit the same file and will therefore show changes directly.

In the Swagger Editor, the left screen is the actual editor, while the right side shows addtional information and can be used to quickly navigating the file.

!["Swagger Editor"](./assets/0301_02_swaggereditor.png)

Be aware that the sorting order of the actions is different than in the UI editor. In the Swagger editor actions are sorted by their **Url Path** not the Operation-Id. But you have all the attributes you see in the UI editor and more! Use the Swagger editor to make changes to one action. Recommendation: Change **Summary** & **Description** of one + check if you have added Summaries and Description for all actions.

!["Changes via Swagger Editor"](./assets/0301_03_swaggereditorchanges.png)

Afterwards change back to the UI editor by using the **Swagger Editor** again and you will see that the attributes you changed are also changed here. Be aware, in order to update your connector you still need to use **Update Connector** in the top navigation.

Small exercise: Look for an action with dynamic parameters and check how the dynamic parameters are represented in the YAML file. In the next steps we will configure a similar feature directly here in the Swagger Editor.

## 🔍 The wonderful Open-Source-Connector World

**TODO**

## 💫 Making Action Schemas dynamic
One of the features you often see in Standard Connector is another dynamic feature: The dynamic Schema. It is used when you selected on parameter in an action, and based on that selection the "schema" aka the fields shown in that action are changed. Probably the most used actions utilizing this feature are in the Dataverse Connector. Every Create / Update action works like this, first you select the Table and based on this the action will show you all available fields of that table, including all customizations only available in the current environment.

In this step we want to add such a feature to our connector as well. The Event API has an endpoint where you can submit Form, and each form can have very different fields. We want to add a Submit Form action were the user first select the Form and then directly sees which fields are available.

### Preparations
For this work we need to add two actions. Add them the same as we did in the Labs before so make sure to:
- Add as action using **Import from sample**
- Fill Operation Id, Summary, Description
- Make parameters dynamic
- Update Connector
- Test action and use result to define Default Response

The two actions are these:

Event API - Get Forms: **GET** request to this url: 
**https://fa-eventapi-us.azurewebsites.net/api/events/{eventid}/forms**  
Returns all available forms for a specific event

Event API - Get Form Schema: **GET** request to this url: 
**https://fa-eventapi-us.azurewebsites.net/api/events/{eventid}/forms/{formid}**  
Returns the schema for a specific form. The Schema describes what fields are in the form and what data type they are.

We will use the first action to get a list of forms including their ids so that we can used that in the second action to get the schema of that form which is needed so that the Custom Connector knows which fields are available.

Add these actions as described above! So two times to this:
- Add as action using **Import from sample**
- Fill Operation Id, Summary, Description
- Make parameters dynamic
- Update Connector
- Test action and use result to define Default Response

Check **[Result of Operation](../lab-02/#🚀-making-an-action-dynamic)** for a refresher how to add an action like this.

For the **Event API - Get Form Schema** we want to do one special thing. This function will only be needed for the next action, no user will or want ever use it standalone. In order to not confuse them by showing too many options we can hide these kind of action from the UI in Power Automate and other consumers. For this we need to go to the **Definition** of the action and set the **Visibility** to **Internal**. This way we can still use the action normally for other action, but it will not be shown to the user.

!["Internal Action"](./assets/0303_01_internalaction.png)

Perfect! When you have added these two function let's combine them for the Submit Form action in the next step.

### Add Submit Form action
