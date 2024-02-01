import manifest from "@neos-project/neos-ui-extensibility";

import ColorValuesEditor from "./ColorValuesEditor";

manifest("Carbon.ColorValues:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.ColorValues/Editor", {
        component: ColorValuesEditor,
    });
});
