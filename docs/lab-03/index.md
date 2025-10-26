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

!["Changes via Swagger Editor"](./assets/0301_02_swaggereditorchanges.png)

Afterwards change back to the UI editor by using the **Swagger Editor** again and you will see that the attributes you changed are also changed here. Be aware, in order to update your connector you still need to use **Update Connector** in the top navigation.

Small exercise: Look for an action with dynamic parameters and check how the dynamic parameters are represented in the YAML file. In the next steps we will configure a similar feature directly here in the Swagger Editor.

## 🔍 The wonderful Open-Source-Connector World
