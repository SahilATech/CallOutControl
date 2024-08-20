# PCF-CalloutControl

**PCF-CalloutControl** is a custom control designed with PowerApps Component Framework (PCF). This versatile control offers customizable callouts with various features and settings to enhance user interactions within your application.

[Managed Solution](https://github.com/SahilATech/CallOutControl/raw/b353bb367c4f985bc26b3bd788c8dc545509318b/Solutions/solution_managed.zip)

## Features

- **Customizable Callout**: Display dynamic messages and actions in a callout dialog.
- **Flexible Button Configuration**: Control the number of buttons and their labels.
- **Directional Hint**: Position the callout in various directions relative to the target.
- **Hide on Outside Click**: Optionally close the callout when clicking outside.
- **Gap and Width Settings:** Configure visual spacing and size for the callout and its components.

## Key Properties

- **`sampleProperty`**: Bound property for synchronizing field values with the control.
- **`Title`**: Text displayed as the title of the callout.
- **`Description`**: Text displayed as the description in the callout.
- **`Link Text`**: Text for the link displayed in the callout.
- **`Link Url`**: URL for the link displayed in the callout.
- **`HideCallout Button Name`**: Text for the button to hide the callout.
- **`ShowCallout Button Name`**: Text for the button to show the callout.
- **`Default Message Visible`**: Determines if the message should be visible on load of form.
- **`Callout Button Message Gap`**: Gap between the ShowCallout/HideCallout button and the CalloutBox.
- **`Buttons Gap`**: Gap between the Primary and secondary buttons.
- **`Beak Width`**: Width of the beak of the callout.
- **`Done Label (Two Buttons)`**: Label for the "Done" (Primary) button when two buttons are used.
- **`Cancel Button Label (Two Buttons)`**: Label for the "Cancel" (Secondary) button when two buttons are used.
- **`Button Label (Single Button)`**: Label for the single button action.
- **`Directional Message`**: Directional hint for the callout position (e.g., Top Left Edge, Bottom Center).
- **`Buttons`**: Determines whether the callout has no button, a single button, or two buttons.
- **`Hide On Outside Click`**: Determines if the callout should hide when clicking outside of it.

![MultiselectPcf](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/CalloutProperties_1.png)
![MultiselectPcf](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/CalloutProperties_2.png)
![MultiselectPcf](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/CalloutProperties_3.png)

## Customization

- **Function Overrides**: Customize the behavior of the callout by overriding the default done, cancel, and dismiss functions. The control exposes these functions through the global `pcfCalloutControl_{logicalNameofField}` object, allowing you to modify their behavior as needed:
  - **saveFunctionOverride**: Override the default save functionality.
  - **cancelFunctionOverride**: Override the default cancel functionality.
  - **DismissFunctionOverride**: Override the default dismiss functionality.

- **global Object - pcfCalloutControl_{logicalNameofField} (in screenshot name)**

![OverrideFunction](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/OverrideFunction.png)

**Override cancel function**

![OverrideFunctionExample](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/OverrideFunctionExample.png)

You can also utilize the global `pcfCalloutControl_{logicalNameofField}` object for additional functionality:
  - **Show Dialog**: You can programmatically open the dialog using JavaScript without requiring a button click.

## Usage

CallOutControl is ideal for scenarios where you need a versatile callout component with customizable features. It allows for extensive configuration of callout visibility, button labels, and display directions, making it suitable for applications requiring dynamic and context-aware callout messages.

**Callout Open Button**

![Dialog Open Button](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/ShowCalloutbutton.png)
 
 **Callout Control**
 
![Dialog Box](https://github.com/SahilATech/CallOutControl/blob/b353bb367c4f985bc26b3bd788c8dc545509318b/Images/CalloutControl.png)


[Managed Solution](https://github.com/SahilATech/CallOutControl/raw/b353bb367c4f985bc26b3bd788c8dc545509318b/Solutions/solution_managed.zip)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the sections and content as needed to fit your project's specifics and documentation style.
