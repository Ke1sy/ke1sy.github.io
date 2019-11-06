'use strict';

$(document).ready($ => {
    const usersURL = 'https://randomuser.me/api/?results=';
    let usersContainer = $('.js-users');

    function addPreloader() {
        let preloader = `<div class="loading js-preloader"></div>>`;
        usersContainer.append(preloader);
    }
    function removePreloader() {
        $('.js-preloader').remove();
    }

    function addUser(user) {
        let pic = user.picture.thumbnail;
        let name = user.name.first ? user.name.first + " " : '';
        let last = user.name.last ? user.name.last : '';
        let title = user.name.title ? user.name.title + " " : '';
        let gender = user.gender ? user.gender : '';
        let email =  user.email ? user.email : '';

        let country = user.location.country ? user.location.country : '';
        let state = user.location.state ? user.location.state + ", " : '';
        let city = user.location.city ? user.location.city + ", " : '';
        let streetName = user.location.street.name ? user.location.street.name + ", " : '';
        let streetNum = user.location.street.number ? user.location.street.number: '';

        function toDate(date) {
            var newDate = new Date(date);
            var dd = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate() ;
            var mm = (newDate.getMonth() + 1) > 9 ? newDate.getMonth() + 1 : '0' + (newDate.getMonth() + 1);
            var yy =  newDate.getFullYear();

            return dd + '.' + mm + '.' + yy;
        }


        function fomattedPhone(phone) {
            return phone.replace(/[-()\s]/g, '');
        }

        function head() {
            return title + name + last + ", " + gender;
        }

        function address() {
            return country + state + city + streetName + streetNum;
        }

        let markup = `
            <div class="user">
               <div class="user__view">
                   <img class="user__img" alt="" src=${pic} height="80" width="80">
               </div>
               <div class="user__info">
                    <div class="user__name">
                       ${head()}
                    </div>
                    <div class="user__phone">
                    <a href="${fomattedPhone(user.phone)}" class="user__link">
                          ${user.phone}
                    </a>
                    </div>
                    <div class="user__mail">
                        <a href="mailto:${email}" class="user__link" target="_blank">
                             ${email}
                        </a>
                    </div> 
                    <div class="user__address">
                       ${address()}
                    </div>
                    
                    <div class="user__dates">
                       <div><span>DOB: </span><span>${toDate(user.dob.date)}</span></div>
                       <div><span>Registered: </span><span>${toDate(user.registered.date)}</span></div>
                    </div>
                </div>
            </div>`;
        return markup;
    }

    $('.js-load-users').on('click', () => {
        let newLink = usersURL + Math.floor(Math.random() * 101);
        let users = getUsers(newLink)
            .then(users => users.results)
            .then(usersList => {
                if(!usersList.length) {
                    return false;
                }
                let content = '';

                for (let i = 0; i < usersList.length; i++) {
                    let user = usersList[i];
                    content += addUser(user);
                }

                let stats = makeStatistics(usersList);


                $('.js-users').html(content);
                $('.js-statistics').html(stats);
            })
        ;
    });
    let users = null;

    function getUsers(url) {
        addPreloader();
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function (data) {
                    if(data.results.length) {
                        users = data.results;
                    }
                    resolve(data);
                    removePreloader();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    reject(thrownError);
                    removePreloader();
                }
            });
        })
    }


    function makeStatistics(list) {
        if(!list.length) {
            return 'No results!';
        }

        let nationalities = [];
        let male = list.filter((item)=> item.gender === 'male');
        let female = list.filter((item)=> item.gender === 'female');
        let nat = list.map((item)=> item.nat);
        let uniq = [ ...new Set(nat) ];


        for (let x in uniq) {
            let name = uniq[x];
            let count = list.filter((item) => item.nat === uniq[x]);
            nationalities.push({name: name, count: count.length});
        }

        function makeNatList(items) {
            let content = '';
            for (let i = 0; i < items.length; i++) {
                content += `
                <div>
                        <span>${items[i].name}:</span>
                        <span>${items[i].count}</span>
                 </div>`
            }

            return content;
        }

        let statTemplate = `
            <div class="stats">
                <div class="stats__amount">Общее кол-во пользователей: ${list.length}</div>
                <div class="stats__gender">
                    <div class="stats__gender__item">Мужчин: ${male.length}</div>
                    <div class="stats__gender__item">Женщин: ${female.length}</div>
                </div>
                <div class="stats__more">${male.length > female.length ? 'Мужчин больше' : 'Женщин больше'}</div>
                <div class="stats__nat">${makeNatList(nationalities)}</div>
                <div class="stats__telegram">Username Telegram’a: 0</div>
            </div>
          `;

      return statTemplate;
    }


    //search

    $('.js-search').on('submit', (e) => {
       e.preventDefault();
        let searchText = $('.js-search-input').val();
        if(users === null || !users.length){
            return false;
        }
        let newUsers = users.filter((item) => {
            let str = item.name.first + ' ' + item.name.last + ' ' + item.phone + ' ' +  item.email;
            console.log(str);

            if(str.indexOf(searchText) > -1) {
                return item;
            }
        });
        let content = '';

        for (let i = 0; i < newUsers.length; i++) {
            let user = newUsers[i];
            content += addUser(user);
        }

        let stats = makeStatistics(newUsers);

        $('.js-users').html(content);
        $('.js-statistics').html(stats);

    });
});
