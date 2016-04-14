AlertViews: iOS like AlertViews
===================================

Show loading modal, confirmation alert, action sheet with multiple options.

### Installing
```
meteor add indesign:alertviews
```

### Usage
Show loading modal
```js
Alerts.showLoading('Loading...');
```

Show confirmation alert
```js
Alerts.showConfirmation('Title', 'Description', 'AcceptText', 'CancelText', 
    function() {
        console.log('User accepted');
    },
    function() {
        console.log('User canceled');
    }
);
```

Show action-sheet
```js
Alerts.showActionSheet('Title', 'CancelText', [
    {
        text: 'Option 1',
        destructive: false,
        callback: function(){
            console.log('Selected 1');
        }
    },
    {
        text: 'Option 2',
        destructive: true,
        callback: function(){
            console.log('Selected 2');
        }
    }
]);
```

### Hiding alerts
Hide loading and confirmation programatically
```json
Alerts.hide();
```

Hide action-sheet programatically
```json
Alerts.hideActionSheet();
```

### Contribute
Feel free to create issues or even better create a pull request