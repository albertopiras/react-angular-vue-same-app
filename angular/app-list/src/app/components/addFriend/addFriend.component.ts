import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../friend';

declare var jquery,$: any;

@Component({
    selector: 'add-friend',
    templateUrl: './addFriend.component.html',
    styleUrls: ['./addFriend.component.css']
})
export class AddFriend implements OnInit {

    constructor() {
    }

    @Input() list: Array<Friend>;

    genders = ['male', 'female'];
    friend: any = {};
    genderElement: any;

    createFriend() {
        this.genderElement = document.querySelector('#genderSelect input.select-dropdown');
        let newFriend = new Friend(this.friend.name, this.friend.lastName, 23, this.friend.email, this.genderElement.value);
        console.log('createFriend ' + JSON.stringify(newFriend));
        this.list.push(newFriend);
    }

    getImagepath(path) {
        return "./assets/img/" + path + ".png"
    }

    onSubmit(form) {
        this.createFriend();
        $('#modalAddFriend').modal('close');
        form.reset();
        this.genderElement.value = "";
    }

    openModal() {
        console.log('modal open');
        $('#modalAddFriend').modal('open');
    }

    ngOnInit() {
        // init Material modal 
        $('#modalAddFriend').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                // console.log('Modal ready');
            },
            complete: function () {
                // console.log('Modal closed');
            }
        }
        );

        // init Material select 
        $(document).ready(function () {
            $('select').material_select();
        });

        console.log("Component Add-Friend ready");
    }
}