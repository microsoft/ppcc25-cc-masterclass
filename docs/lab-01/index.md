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

### Naming / Description

As a minimum you need to enter a unique id for this action. Choose a name which is easily recognizable and not a typical "id" because later on other actions use this id to refer to it.

We want to call the Community Event API to get a list of all available events, which we can call it with a **GET** request to this url:
**<https://apim-dhino-fetch-prod-002.azure-api.net/002/export/query/FF4740ED-7415-4D36-80A7-7E7C565806AA/974BB697-57A4-4132-8A6E-C6E11BCE5493/EVENTS>** **TODO**

The two GUIDs in the URL are referencing the environment we want to target and we will consider them static for now, they point to the community database in our community tenant.

### Request

Pick an id for this operation and we will go on the **Request** part of it.

The wizard has a great feature called **Import from Example** where you can copy paste an existing request (for example from documentation or lab instructions on GitHub), an the wizard will extract all needed information.

!["Create Request from Example"](./assets/0103_01_requestexample.png)

In the opened dialog fill in the URL and HTTP method from above. Since this is a simple request with no further information you are all set to go and can click **Import**

!["Create From Example Details"](./assets/lab03_02_requestexampledetails.png) **TODO**

Congrats, your connector has its first action! 🥳 Let's quickly test if we did all steps correctly so far.

### Saving and Testing

In order to test a Custom Connector you always have to save it first. If it's the first time it will actually create the Custom Connector. Do this by clicking **Create Connector**. This will deploy all resources needed in the backend and can sometimes take a bit.

!["Create Connector"](./assets/0104_01_createconnector.png)

After the Creating is done and the loading screen is gone we can skip ahead in the Wizard navigation and jump to the final stage **Test**

Because the connector is newly created there is no Connection yet so in order to test it we first need to create one by clicking on **New Connection**

!["Test Stage"](./assets/0104_02_testconnection.png)

This will open a new tab where you have the default Create New Connection interface like for all connectors. Which fields are shown is dependent on the selected authentication method. In our case this is the API key. Recognize the name of this field? That's the label we defined in the **Security** step! Click **Create Connection** to create it. 

As API Key use your **User Name**, so when your login is UserXYZ@worksop.onmicrosoft.com use UserYXZ. Make sure to use your User and NOT "UserXYZ" because the API Key differentiates between different users.

!["Create Connection"](./assets/0104_03_testcreateconnection.png)

You will be redirect to the test screen. If the **Connection** field is still empty, click on the **Refresh** button and your newly created connection shows up.

With that we are ready to test! On the left hand you can select the action, and since we only have one which has no parameter you can click directly on **Test**

!["Test Operation"](./assets/0104_04_testoperation.png)

If all is set up correct and the connection has the right API Key you will see the result of that API call with a HTTP status 200.

!["Test Result"](./assets/0104_05_testresult.png)

First call made by your Custom Connector to the Community Event API!

We will do one more step though, as you might noticed we skip one step in the definition part, the definition of the **Result** of our operation. Since we now have the result JSON let's add it!

### Result of operation

Copy the body from your test execution of the operation.

Afterwards we navigate back to **Definition** of the wizard. Here navigate down to the **Response** area and click on **Add Default Response**

!["Add Default Response"](./assets/0105_01_adddefaultresult.png)

This will open again a dialog where you can define the expected result by copying a demo result. Good that we have one now! We only care about the body of this result for this API so copy the response into the **Body** field. The Dialog will now parse the JSON Object and store its schema (similar to the **Parse JSON** action in Power Automate!)

!["Import Response from Sample"](./assets/0105_02_responsefromsample.png)

To see the result click on the **Default Response** in the main screen.

!["Default Response"](./assets/0105_03_defaultresponse.png)

In the detail screen we now see that the Custom Connector knows about all the fields which are returned from the action.

!["Default Response Parsed"](./assets/0105_04_defaultresponseparsed.png)

This is very important and **strongly** recommended to set up for all your actions. If you don't this, when a user calls this action in any UI (Power Automate, Power Apps, etc.) they will only get a JSON object and have to do all parsing themselves. This way the structure is already stored in the Custom Connector and can be directly used. This will be important in the following steps.

Also remember to **Update Connector** to publish your changes!

!["Update Connector"](./assets/0105_05_updateconnector.png)

## 🎯 Create an operation with parameter

Let's get into the more interesting stuff, let's make more dynamic operations. You saw that the GET/Events action only returned one event because the environment has this global filter, so let's check out the connected records. For this we will add **Tracks** and **Sessions** with the goal of getting only session of a certain track.

For that we will need the Tracks first so let's start with them!

### GET/Tracks

Follow the same steps as we did in the operation, starting on the **Definition** screen and click on **New Action**

!["New Action](./assets/0106_01_newaction.png)

The action is again a GET call to the following URL **<https://apim-dhino-fetch-prod-002.azure-api.net/002/export/query/FF4740ED-7415-4D36-80A7-7E7C565806AA/974BB697-57A4-4132-8A6E-C6E11BCE5493/TRACKS>**  **TODO**

After following the same steps as we did for the GET/EVENTS, you should see a test result like this:

!["Tracks Results"](./assets/0106_02_tracksresult.png)

Like we did before copy these and add them as the **Default Response** in the definition screen for the Tracks action. If you click on the Default Action afterwards the properties should be parsed like this:

!["Track Results Parsed"](./assets/0106_03_tracksdefaultresponse.png)

Tip: Make sure to select the correct action on the left hand side before Import the Default Response, or you might risking overwriting the response of the first action.

### GET/Session By Track

Next step is calling the action which returns us sessions filtered by track. The Community Event API offers the following GET endpoint, here as an example for the track **Power Platform**:

**<https://apim-dhino-fetch-prod-002.azure-api.net/002/export/query/FF4740ED-7415-4D36-80A7-7E7C565806AA/974BB697-57A4-4132-8A6E-C6E11BCE5493/SESSIONSBYTRACK?filter=2653cbaf-c0aa-f011-bbd2-7ced8d40f28f>** **TODO**

This is the endpoint for track **Dynamics 365**:

**<https://apim-dhino-fetch-prod-002.azure-api.net/002/export/query/FF4740ED-7415-4D36-80A7-7E7C565806AA/974BB697-57A4-4132-8A6E-C6E11BCE5493/SESSIONSBYTRACK?filter=8326f5b6-c0aa-f011-bbd2-7ced8d40f28f>** **TODO**

The dynamic part of this request is the part after the "?filter=" followed by the **Id** of a track.

So our first step is adding an action which takes one parameter. For that we go to **Definition** and add another action, give it an id, and use the **Import From Sample** function.

!["Add Action With Parameter"](./assets/0106_04_addparameteraction.png)

Copy the URL from above, but this we modify the URL and mark which part should be a parameter. This is done by replacing the text with "{PARAMETERNAME}", so if we want to add a parameter named "trackid" we use the following URL:

**<https://apim-dhino-fetch-prod-002.azure-api.net/002/export/query/FF4740ED-7415-4D36-80A7-7E7C565806AA/974BB697-57A4-4132-8A6E-C6E11BCE5493/SESSIONSBYTRACK?filter={trackid}>** **TODO**

!["Dynamic Parameter"](./assets/0106_05_dynamicparamter.png)

After clicking on **Import** you directly see that our request now has a parameter:

!["Parameter displayed"](./assets/0106_06_parameteradded.png)

If you click on the parameter and select **Edit** you can check it's properties. We have a lot of options here, for now let's just set it to **Required = Yes** because without a value the API will error out.

!["Parameter Config"](./assets/0106_07_parameterconfig.png)

After this let's test our new function! **Update Connector** and move to the **Test** screen and select the new action. You see that we now have a parameter field and can add an Id for a track. Test the Tracks action first to get the ids and then test it with the new action.

!["Test Parameter"](./assets/0106_08_testparameter.png)

This works pretty well! But obviously this not an ideal user experience, you need to know very cryptic GUIDs and there is no support on how to enter them. Let's improve that in the next step!

Congrats! You have build a simple connector completely from scratch! In the next lab we will look into extending it and also making it dynamic 💪