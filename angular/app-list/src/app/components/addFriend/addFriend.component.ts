    import { Component, Input, OnInit } from '@angular/core';
    import { Friend } from '../friend';

    declare var jquery: any;
    declare var $: any;

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
        friend:any = {};
        createFriend() {
            let newFriend = new Friend(this.friend.name, this.friend.lastName, 23, this.friend.email, this.friend.gender);
            console.log('createFriend ' + JSON.stringify(newFriend));
            this.list.push(newFriend);
        }

        onSubmit(form) {
            this.createFriend();
            $('#modalAddFriend').modal('close');
            form.reset();
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
                    console.log(modal, trigger);
                },
                complete: function () {
                    console.log('Modal closed');
                }
            }
            );

            // init Material select 
            $(document).ready(function () {
                $('select').material_select();
            });

            console.log("I'm ready");

        }
    }