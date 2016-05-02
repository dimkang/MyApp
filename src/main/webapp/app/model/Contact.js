/**
 * Created by kangxiwei on 16/5/2.
 */
Ext.define('BrazilJS.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
        {name:'id', type:'int'},
        {name:'name', type:'string'},
        {name:'phone', type:'string'},
        {name:'email', type:'string'}
    ]
});