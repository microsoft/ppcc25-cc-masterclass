# Lab 01 - Build your first connector from scratch

In this lab, you will go through the following tasks:

* Create a connector in the solution
* Setup authentication
* Add operation with Parameters

We will use the community event API as an example to connect to. It's a simple demo API for event management. 

## 🔗 Create a connector from blank

As we learned before there are multiple ways to create a Custom Connector, we will use the most basic one to learn the basics 🙂

Inside your solution click on **New** and in the menu on **Automation** and then on **Custom Connector**

!["Create new Connector"](./assets/0100_00_createnew.png)

In a new tab the Custom Connector edit wizard will be opened in the first step.

!["Create Connector Wizard - Naming](./assets/0100_01_wizardname.png)

First step is given your Custom Connector a meaningful name, make sure to use a name your users will understand, this will show up in all UIs. Bonus points if you also add an icon below under **General Information**

Next you need to select **HTTPS** and fill in the **Host** and **Base URL**. The community event API can be reached via dhino (Middleware used to publish Dataverse data) under the following url. Do not fill the "https://" part in the host and you can only put the root URL until the first "/" there. The "Base URL" is the part of the URL which is common to all requests being done via this custom connector.

**<https://apim-dhino-fetch-prod-002.azure-api.net/002 >** **TODO**

!["Adding Host and Base URL"](./assets/0100_02_hosturl.png) **TODO**

## 🔐 Define Security / Authentication

Click on **Security** on the bottom or in the wizard status on top to move on to the next step. Authentication describes how the Custom Connector will authenticate with the API and the options to choose from depends on the used API.

For the Event API the authentication is done via an **API Key**, so select this option

!["Authentication Type"](./assets/0101_01_security.png)

After selecting you will asked to enter the label, name and location of parameter.

**Label:** This will be shown to the user when creating a new connection, shows a readable meaningful name

**Name:** This is the technical defined **by the API** so you can be creative here!

**Location:** This defines where the Custom Connector will add the API Key information when making requests.

The Community Event API will be authenticated by an API Key in the Header of each HTTP Request called **Ocp-Apim-Subscription-Key**

!["Api Key Setup"](./assets/0101_02_apikey.png)

All done! Very important: **You do not need to enter any API Key in this step!** Authentication info is never stored directly in a Custom Connector but only ever in Connections. They will get created later when we are actually are using our Custom Connector.

## ⚡ Create first simple definition

Click on **Definition** to get to the next step of creating a Custom Connector, the stage where we define the actual actions which are possible to execute for this Custom Connector.

In this screen you see all actions, triggers, references and policies you have added to your connector. Since we create from Blank this screen will be empty.

Let's change that by adding our very first action by clicking on **New Action**

!["Definition Overview"](./assets/0102_01_definitionoverview.png)

Creating an action consists of three steps:

* Naming / Description
* Request definition
* Response definition

!["Create Operation"](./assets/0102_02_createoperation.png)