# Lab 03 - Advanced Custom Connector features

In this lab, you will go through the following tasks:

* Learn about the technical background of connectors
* Make responses and schemas dynamics
* Implementing triggers to Custom Connectors

You will extend the connector you started building in the previous lab.

## 😎 Swagger - The "magic" behind connectors

So far we did all our extension and configurations for our Custom Connector directly in the UI, but there are some more hidden features for which there is no UI (yet). For these let's take a look what's behind the scene of connectors. In the end a Custom Connector is basically a huge YAML file 