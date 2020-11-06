const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 2},
            {id: 2, message: 'My first post here.', likes: 7},
            {id: 3, message: 'Blah blah', likes: 5},
            {id: 4, message: 'Hey-ho, lets go', likes: 15},
            {id: 5, message: 'Hello world', likes: 47},
            {id: 6, message: 'Cmon everyone', likes: 65},
            {id: 7, message: 'Thats me', likes: 147},
            {id: 8, message: 'Thank you for feedback', likes: 200},
          ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: "What's up?"},
            {id: 3, message: 'Come with us tonigh. 7PM'},
            {id: 4, message: 'I will be there, bro'},
            {id: 5, message: 'See ya.'},
        ],
        dialogs: [
            {id: 1, name: 'Dima', img: 'data:image/jpeg;base64,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'},
            {id: 2, name: 'Vasya', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAPDw8QDw8PDxAPFRUPDw8QDw8VFRUWGBYSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLysBCgoKDg0OFxAQGCsdHR0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rKy0tLS0tKy0tLS0tLS0rLS0tNy03KzctKystK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIEAwUGBwj/xAA6EAACAQIEBAQEAwcDBQAAAAAAAQIDEQQFITESQVFhBiJxgRORobEHMtEjQlJicsHwFOHxFSSSosL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAAICAwADAQAAAAAAAAAAAQIRAyESMUEEIlET/9oADAMBAAIRAxEAPwD5ICgKAAAAAAAAAAAAABCgCApAICgCAtiWAAAAAACKQqAAEYC4uAAuLgALgADIAAAAAAAAAAAUgAAtgISTS3t80YzqLb/n2OFJb/NPX5Acrrq9t/ojNV0rXglfbid0/Rmu4XVrbbGdGV1wNaOzV+Uu3qFdnSlRbUZRVOX8zfC77a8jsFk1OpG1Obp1P57ulLsna6fzOrwFNTUo1OSbi7K6a5PtY2sDjJ0ZcDd4p7dusXy/3IrVxuX1KLanHRfvRu4P0f66mqeqxOJhVhdO8lo024pxsrJWvv0fT3PPYmhZ3V9b6O11rsVNNYAoRjYWLYoViUAIjYFgAAAAgAAAFGYKCCAoAAAAAABCgCEm9DIypUXOXZCrI0/h32X1NmlhpbtHoMny6LeqTbPT4bK6ctHFWRwy5pK9OP4+52+dwpu9rdthKg+nO66b3/z1Pp68M0JK/Db0KvClPi00XoJzwv49fN4cWrSs3vpv3+rNqjl8p205WufS6fhWjHVq7N7DZNRhtH57EvNGpwX6+ZPJK1NXSaurNbaXvqaVeknLZ3Tlu/8AOrPtuGw8PyuKaemqOp8SeDKVSHxKSSlFPSy17dy4cm2eTj0+OYijbXvqtL/Loa57TH5Fo9EtEnpdpe2546pTcZOL3i2n2admdpXnymmAKCohCgCApAiMFIBAUgAAFHIACACgCFAKIChgQApFQ7LAUml6mhTjeSXVpfNnpqNBJXMZ+nTi9trKI215np8DC/3PMYbSR6jLmePKdvoY3p3dKlpc2aFIYX8vsbFMSJayVLT6kdDQ5Uc7tY14xny00IxOZV7KzMa3+dTSrTM701Zt1+OoRaelle3Sy6nyvxZh/h4yquUuCotEvzRV9v5lI+vyfr105+x82/EWiliKVRJ+em027+Zxff8AqPVxXbx8s08kQoOrgjIVogAABEIUjAAACFAA5AAUAAFAUAQFIAAAGdD88f6l9z2/ArbLbkeOpUPKpp+a91H0fX1R63DVLxXsjnlY6442e/rjStI9Fk9W9vY8hmOPcJWjFvvyMcL4hqUn5oaen9zhlht6cc5I+tYTa3obvw+Z4PJ/GVOVlNOLPZYPHxqRTi7oz6b3vuN6nFNnO4nUYzMo0Vd/8njs18b13LgpQ4U9E20m/Zmp2zZXvK6vzNGrDU8RTxWKm1x1VCbu7Xkr9LX3O+yfF1n+zr2lbaSVmuzXM55Y6blb+JnZe6V/c+d/iFiFKrRVrOMJX3u9Uk/o/kfQMyVop7WOtxi+DT+KsJSrVnFKUqsISUFzgnJNvv3bOnHnMZuuWXFc8tR8lIdp4ipQjiJfDgqcJwp1OBflpucU3FdFfl3OsPTLubePLHxtl+IRlBUYgpCoEZSEEsWwAEAaAHIACqFAAAFQEAAAAAbWFqJOnfbjSfa8r/3Z3mXV78cf4bW7q+jPNRdjusnm3VenllC6fK91p9WcrNV6ccplhr+OXGc3q39jSq4KvPh+G3d7x29t/VXPVYPARq76M7XC+H+HVSkvRtHGZ6df89x4qtlWKoqMpRd5a2UoyUddFvrpbVc+R638OsdKpOVOd9LPXkb+YYaMKUr66c3d/U0PAFL/ALmpZWu4pehLfJqY6erznK1WbSfDyu9jwWceH6knOClwu64XFyTa58TS+R9Rt5nfa5jVy2EtXFP1VyTq9Lda1XzzLcgrRg4/FjKpKor8KfwVBRS4XTaSbbV7pLXnqewy/LPhqzfFbnzfrz+p2OGy+EH5YpeisctV2Gd33TGSdR0uer9k+HWTsknzlfT6nV/6ngwjnXn8SMKc3JuydluvW7t7na5lVvOhFaN1oP8A8bz/APk8N+IeYKPBhIeW6VSotL73inbq/NbtEmGPlZGvOYY3L68ZisRKrOVSf5pu7tsuiXZKy9jhKQ9r5tu7ugACBGUjCIGABAABGCgDOxQCqCxQBCgACFAEBQBDsMprcMk+k48+Urr7v6nXklt3M2bXG6r6Bg6/DLTmeswFbiifNsqx/HFa+ZaP9T1mV5jaOr0R5c5qvfx5bja8XVVGi7HF+HdF8Sm7eZ2ep0PibMHUWj0WvY1/Dfip4eUlUipR0tbdWGM+rcpK+u4q6bStfUww+YxflejPN4PH18XVjUhXpUsPzi05VWvW9kzvMwwMZpSp2U47W2a6Ml3O4vX12cqsWtDRxU9DRoYiVuF6NadzgzTHKlTcpaK2nVszva606PPs8pUMTSlUTlGnGpKy3crWil82fNcyxkq9apXn+arNz9L7R9lZexvZ/i3VnKT1u/77HUM9XHjJHh5c7bpAAdHIAAAjKRlRAAQCFZAAAA5QWxSqxsLGQAxBlYWAxBlYWIMQZWFijEMrRAOOjXlTleL1+53NfOf2UVD80t97LsdHiI8xhqiTs+pzywldMM7OnY1qsmlxzSuucrXOTA0KMm08RCLa3tKSXd2O2o4KFSmtE+GyXc3cDicLSVqtGDa6wi/uc5k9OPHPtdVQlGlZLHQa1j5Izt1009TtYeIqtPhUMRxriTVm/dPtojv8pzPDVfLClFX00pxsj0lPBUnBxdOLUt/KtTOVjpcMZOq81lHiiE6j+PdPhWqV02nzPK+Js9liKzSdqadlb1a+tjHxTQWHxM4Rem6t3s7ezOgvKTSjq20klq3qrJGsMJ7efkzvpliKt1bo/tua5sY/CulVnSlvCTi/1OA7x577QABAAFAMAIjIVkIBCgCAADYIAVQAoEBRYCAoAgKAISxJyS1bSXc1K+M5R+fMI3YQ4pRj/E0vqadeg4TcHyej6rqdpkzjFRa3kk23uzmzGgqmuia2Zzufbr/n+u3JkWZ/DvGWsNP8R63D5fhazV6kddfpzPnKvB6m5hsW15rtPVu3TXSxnLDfcbw5ddV9dyjL8Jh4qUZR9Xv3MM88S0qCcIO87S9tNz5fHOqlrcbtrz2vZfocGIxspc+VvlzMzj77by5uumWZ4uVSXG3xNt63153v8z0PgDJHVn/qZryQb4U1u7rX/OpoeHPDtTEyTacaXFq3+8rbL6H1TAYSNKMYRWiXoXPKSajPHhcruvBePPDVaNWpjKUJVKNS0p8KvKjJJJtpa8Lte/LW9tDxLP0ThG1c+W/inhMPSxVJ0acacqtKU6iglGLlxaTstm9b9bF4s99M8vHr9niAZRSfOwcbf7HbVcNsSFIFAABCFZCIAAAAyAbABSqgKAAAAAN9TXrYq2kRpHNUmorV2+5p1sY/3dO73OCcm9TjaKbSc29W37mJWiER2eX1fKl00OxVa6OhwlThdns/oztKV7HHLHt6ePLcbFSnGW5xf9Oe0Zad9zlopy0sdtg8BJmPKx0mEy9x1OHyWpJ6NfXQ9Lk3haN053m9N9vkdll+X8NrnqMpwqSTM3kyrePFjG3luDVOCSVvY3YQ1M4x00M4Q5mNN1VaK6JL5Hw7xrmyxWNq1Yu9ONqUH1jC+vvJyfo0er8f+NIuM8JhJ8Tl5atWL8qXOEHzvs3/AH2+bHq4ePXdePm5N9QuZqo+epxBM77edsKSZlw9DXTM4zGpV2zsQ5FNPcnw+jJcVlYMxMmiGRAAQAABsAIFFAQbChw1K6XdmrXxTbstEcDkVNuepWcvQ42YpluVlCNFBFYWMXE5BYDjsbuBxzp6Sjxw6PRr0ZrWKLJVls7j2uS4jC1WkqkYS/hqWhL2vo/ZnscJlystND40jYo4upBWp1KkP6Jyj9mcrw79V6cfyde4+34fL/M3JyknayaVo+lld+5sYjNcNhl+3rU6XaU0n7R3fyPhksyry0liK7XetVa+5rfd/Uk4P7Vv5P8AI+t5l+JmFp3WHp1MRLWza+DT+cvN/wCp4fPvGeMxidOdRU6LvenRvGMl0m73l6N27HnbkOmPHjHDLlyycnELmBTbkoBGAuS4Zi2ByxqHLGqaiMky7G8qiejMZxW6NZSM4VC3sZgr+hDnWgAEHOimJUVVNTG1/wB1e/6GxUnwpvodVUlfURKxbKmQFRmi3MEzJAUpiUCghQAAAqKQFFuW5iVMDIETFwKAAiopAgDMbGZiBAgQC3KmYi4HPTnyOQ1UzYpyuvQXtYyABhXKUAquHHfkXqjrpEBYlRFQAQMkABSogAyIUAAgADAAFKAUAigCopAEEZcyAC/qREADmiAARhAAQ5sNz9AAOYACNP/Z'},
            {id: 3, name: 'Masha', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGSzOjOedm3uA/profile-displayphoto-shrink_800_800/0?e=1609977600&v=beta&t=k2wdK-ltX9NCfw3dppuWXpkDv7dyYWrpw5NZtyK6TZw'},
            {id: 4, name: 'Lida', img: 'https://media-exp1.licdn.com/dms/image/C5603AQFx7qq1v6TaHw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=TLvHi-R1LXz3c2jS7vvhgln0ST25BzCutQ93yDSZR9s'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andre'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    }
}

export default state;