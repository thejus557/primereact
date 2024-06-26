import { ComponentBase } from '../componentbase/ComponentBase';

export const ToolbarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Toolbar',
        id: null,
        style: null,
        className: null,
        left: null,
        right: null,
        start: null,
        center: null,
        end: null,
        children: undefined
    },
    css: {
        classes: {
            root: 'p-toolbar p-component',
            start: 'p-toolbar-group-start p-toolbar-group-left',
            center: 'p-toolbar-group-center',
            end: 'p-toolbar-group-end p-toolbar-group-right'
        },
        styles: `
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `
    }
});
