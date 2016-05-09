import { Tokens } from '../imports/api/tokens.js';

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Tokens = new Tabular.Table({
  name: "GCM Tokens",
  collection: Tokens,
  columns: [
    {data: "token", title: "Token"},
    {data: "applicationId", title: "Application ID"},
    {data: "deviceUuid", title: "Device UUID"},
    {data: "deviceModel", title: "Model"},
    {data: "devicePlatform", title: "Platform"},
    {data: "deviceOsVersion", title: "OS version"},
    {data: "notificationKey", title: "GCM Notification Key"},
    {data: "notificationKeyName", title: "GCM Notification Key Name"}
  ]
});
