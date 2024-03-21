import React from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { IconButton } from "@neos-project/react-ui-components";
import style from "./style.module.css";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.RangeEditor"),
}));

const defaultProps = {
    options: {
        allowEmpty: true,
        disabled: false,
        placeholder: null,
        resetLabel: "Reset",
    },
};

function Editor(props) {
    const onReset = () => {
        props.commit("");
    };

    const options = { ...defaultProps.options, ...props.options };
    const { commit, value, highlight, i18nRegistry } = props;
    const { disabled, values } = options;

    const previewBoxAttributes = (value, highlight, placeholder) => {
        const hasValue = value && Object.prototype.hasOwnProperty.call(values, value);
        const color = hasValue ? values[value].color : placeholder;
        const title = hasValue ? i18nRegistry.translate(values[value].label) : null;
        const classNames = [style.feedback];

        if (value == "transparent" || (!hasValue && placeholder == "transparent")) {
            classNames.push(style.transparent);
        }

        if (!hasValue && !placeholder) {
            classNames.push(style.checkboard);
        }

        if (highlight) {
            classNames.push(style.highlight);
        }

        return {
            className: classNames.filter((item) => !!item).join(" "),
            style: { backgroundColor: color },
            title,
        };
    };

    if (!values) {
        return <div className={style.error}>No color values defined, please add them to your YAML configuration</div>;
    }

    const allowEmpty = options.allowEmpty || Object.prototype.hasOwnProperty.call(values, "");
    const valueArray = [];

    for (const key in values) {
        const item = values[key];
        valueArray.push({
            label: i18nRegistry.translate(item.label),
            color: item.color,
            disabled: item.disabled,
            key,
        });
    }

    const fixedButton = valueArray.length > 9;

    return (
        <div className={options.disabled && style.disabled}>
            <div className={style.wrapper}>
                <div {...previewBoxAttributes(value, highlight, options.placeholder)}></div>
                {allowEmpty && (
                    <div className={style.reset}>
                        <IconButton
                            style="lighter"
                            icon="times"
                            title={i18nRegistry.translate(options.resetLabel)}
                            onClick={onReset}
                        />
                    </div>
                )}
            </div>
            <div className={style.list}>
                {valueArray.map((item, index) => {
                    return item.color ? (
                        <button
                            key={index}
                            className={[
                                style.item,
                                item.color == "transparent" && style.transparent,
                                fixedButton && style.itemFixed,
                            ]
                                .filter((item) => !!item)
                                .join(" ")}
                            disabled={item.disabled}
                            style={{ backgroundColor: item.color }}
                            title={item.label}
                            onClick={() => commit(item.key)}
                        ></button>
                    ) : (
                        <div key={index} className={style.label}>
                            {item.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default neosifier(Editor);
