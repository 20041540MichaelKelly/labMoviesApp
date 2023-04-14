# Enterprise Web Development - Assignment 1.

__Name:__ [Michael Kelly 20041540]

## Overview.

+ Feature Login.
+ Feature Signup. 
+ Feature Protected Routes.
+ Feature Addition filter options.
    + Language.
    + Rating (by selecting stars).
+ Feature Signup.
+ Feature A style that allows the user to hover over a card and select fro anywhere..
+ Feature The Appbar has is styled into dropdowns for wach section.
+ Feature Pagination 
+ Feature User can add movie or tv show to favourites and/or playlist 
+ Feature Actor can be added to favourite actors 
+ Feature Create A Fantasy Movie.
+ Feature View the list of Fantasy Movies.
+ Feature Upload an Image for the Fantasy Movies.
+ Feature Supabase.
+ Feature Vercel deployment. 
+ Feature Snack alerts to inform users of success or failure.
+ Feature Sends an Email to verify your account.
+ Feature Upcoming movies/popular movies/now playing.
+ Feature Tv Shows.
+ Feature Allow the user to add a playlist or favourites of TV Shows.
+ Feature Allow the user to add a view detialed info on the tv programme.
+ Feature Actors.
+ Feature Allow user to add favourite actor to list.
+ Feature User can select Similar movies to the movie they are viewing in detail.
+ Feature A different Style to what was used in the labs. 
+ Feature User can select actors image below the overview and see details associated with that actor.
+ Feature Utilisied datePickers, upload fetaure.
+ Feature Allowed user to create a review and display back using supabase.
+ Feature Used a bucket for the image in supabase and triggers to update profiles account when user creates an account.

## Feature Design.

### Login feature.

> Allows the user to login

![][login]

### Signup Feature

> Allows User to signup if they have no account.

![][signup]

> Validation that the entered email does not exist already. Supabase Auth table does not allow you to query it for such validation so I had to create a trigger that would updat a profiles table with the exact same information and id. I could query the prifiles table then to see if the email entered existed.

![][error_email_exists_signup]

> Success alert appears to alert the user that they have been successful in creating an account.

![][success_signup]

### HomePage with a search bar and differnt style

> HomePage with a search bar and differnt style. This homepage is basically a landing page but is also functional to the user.

![][home_page]

> There is a search bar included to search for a specific movie

![][home_page_search]

> The screenshot displays the movie cards on the home page, one movie has been added to favourites and a playlist.

![][home_page_movie_card]

> The screenshot displays the movie cards on the home page, one movie has been added to favourites and a playlist.

![][home_page_movie_card]

### Upcoming Page

> Upcoming Page retrieves 20 movies from the tmdb endpoint. With the pagination I can go to the next 20 films and so on

![][upcoming_movies]

### Hover Example

> User can hover over a movie and select it, rather than clicking a link at the bootom for more details

![][hover_example]


### Additional Filters.

> Allows the user to search based on vote through picking a star as a rating rating 

![][movie_filters]


### Movies Reviews feature.

> Lists all the reviews for a particular movie (text extract only).

![][review1]

> Click the 'Full Review' link of an entry in the above list to show the full text of a review. 

![][review2]

### Fantasy Movie feature.

> Create a Fantasy movie, upload an image of the movie which is stored in storage bucket in supabase with the corresponding url in fantasy_movie table.

![][create_a_fantasy_movie]

> View the Fantasy Movie created

![][fantasy_list]

> Pick a film and view more details on the film

![][fantasy_movie_details]

### Detailed Linking
![][movie_card1]

> From this page I can click on similar movies
![][similar_movies]

> I can also view an actors bio by clicking on there picture
![][actor_details]

>I can slso click on the image of an actor and view there bio and the films that they are in
![][actor_different_movie]

### TV Shows

> View all TV shows
![][tv_shows]

> Can add tv show to favourite/or playlist
![][tv_shows_fave_play]

>A playlist of tv shows
![][tv_show_play_list]

>A list of favourite tv shows
![][tv_show_play_list]

### Similar TV Shows
> User can also view similar tv sows and add to their playlist
![][tv_similar]

### Actors

> A list of Actors
![][actors_list]

> actors detials that involves detailed linking toother shows and movies that they starred in
![][actor_details]

>Add an Actor to favourites
![][actor_added_to_favourites]

## Storybook.

The stories that I created for the assignmenet where:
+ ActorCard
+ ActorHeader
+ TVShowPageHeader
+ TvShowCard

![][storybook1]

### Authentication.

+ /login - Login page for the user to login with email and password,
+ /signup - Allow the user to create an account,
+ / (Protected) - List of 20  movies from the Discover endpoint,
+ /movies/{movie_id} (Protected)- Detailed information on a specific movie,
+ /movies/popular - (Protected)- List of popular movies from the movies endpoint,
+ /movies/popular/page/{page_id} - (Protected)- Display the chosen page of the next 20 films through Page Id. included for pagination.
+ /movies/upcoming - (Protected)- List of 20  movies from the movies endpoint,
+ /movies/upcoming/page/{page_id} - (Protected)- Display the chosen page of the next 20 films through Page Id. included for pagination.
+ /movie/{movie_id}/similar (Protected)- A list of similar movies.
+ /movies/playing (Protected) - A list of movies now playing from movies endpoint 
+ /tv/popular/page/{page_number} - render the corresponding page number
+ /movies/favourites (Protected) - List of chosen favourite movies,
+ /movies/fantasy (Protected) - Display a list of Fantasy Movie Created by User
+ /movies/createfantasy (Protected) - Create a Fantasy Movie
+ /movies/fantasy/{fantasy_id} (Protected) - Allows user to select a fantasy movie for more details
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /reviews/form/{movie_id} (Protected) - passes the movie id to the form so user can add for that specific movie to supabase,
+ /person/popular (Protected)- A list of popular actors using people endpoint. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ /person/popular/page/{page_id} (Protected) - Passing a page_number to render the corresponding 20 actors for that page from endpoint,
+ /person/favourites (Protected) - List of favourite actors
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movie/{movie_id}/similar (Protected) - A list of similar movies. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ /tv/popular (Protected)- List of 20  TvShows from the Tv endpoint,
+ /tv/popular/page/{page_number} (Protected)- List of tv shows for the corresponding page number,
+ /tv/:id (Protected) - Details on a specific tv show
+ /tv/:id/similar (Protected) - A list of similar tv shows. 
+ /tv/playlist (Protected) - A playlist of tv shows
+ /tv/favourites(Protected) - List of favourite tv shows,

### Protected features (if relevant)
[ Briefly state other areas where you used authentication in the app, for example, to protect access to functionality, e.g. only authenticated users can 'favourite' a movie.]
I am using Supabase for Authentication and to store fantasy movies and reviews that the user enters. Auth table cannot be quiered in the sense to check if an email exists already so to bypass this I created a trigger that would allow me to update a table called profiles wih the data that the user used to sign up. The profiles table is then queried for the email that has been entered. If successful the user will get an email asking to approve authencation. Once a user is signed in. The user can access all aspects of the app but if the user is not signed in then they will only hve login nd signup available to them as the rest are protected routes, that check to ensure that there is a valid session.

### Supabase (if relevant)
I am using Supabase for Authentication and to store fantasy movies and reviews that the user enters. The tables that are being used are (Auth, profiles (which is  updated by a trigger when entry added to Auth) Fantasy movies and reviews). I am also using a bucket to store the image that is uploaded for the fantasy movie and then the name is being stored in the fantasy movie table and the image is displayed back to the use by calling the supabase.getPublicUrl(image). 



## Deployment (if relevant).
Website Deployed: https://lab-movies-2fd81sh4q-20041540michaelkelly.vercel.app/
Credientials that are authorised:
email: johndoe@gmail.com  Password: secret123


## Persistence (if relevant).

>Auth table
![][supabase_auth]

>profiles table which is inserted with the same data as Auth, when user signs up. The first name, last name etc. is in the metadata that can be accessed to update profiles
![][supabase_profiles]

>Reviews table contains all the reviews entered by the user
![][supabase_reviews]

>Fantasy Movies table that contains all the data that the user inputs it also includes the name of the image that is stored in the Images bucket, that we retrieve to display back to the user
![][supabase_fantasy]

>Images Bucket holds the images that the user uploads for the fantasy movie
![][supabase_images]

## Additional Information.

+ The implementation of triggers was all new to me and I had to research into how to perform this when updating one table, populate another with the same data.
+ I researched into all aspects of MUI, datePicker, star rating, ImageList, Grids, Cards.
+ Supabase and Vercel.
+ Learning how to utilise the tmdb api for heavy linking of pages
+ Pagination - I researched this and implemented
+ Snack and Alert to keep users updated on status of action on supabase

[login]: ./screenshots/login.png
[signup]: ./screenshots/signup.png
[movie_details]: ./screenshots/movie_details.png
[movie_filters]: ./screenshots/movie_filters.png
[playlist_favourite_icon_movie]: ./screenshots/playlist_favourite_icon_movie.png
[error_email_exists_signup]: ./screenshots/error_email_exists_signup.png
[success_signup]: ./screenshots/success_signup_alert.png
[home_page_search]: ./screenshots/home_page_search.png
[home_page]: ./screenshots/home_page1.png
[home_page_movie_card]: ./screenshots/movie_cards_home_page.png
[home_page_nav]: ./screenshots/home_page_nav.png
[upcoming_movies]: ./screenshots/upcoming_movies1.png
[hover_example]: ./screenshots/hover_example.png
[review1]: ./screenshots/review1.png
[review2]: ./screenshots/review2.png
[create_a_fantasy_movie]: ./screenshots/create_a_fantasy_movie.png
[fantasy_list]: ./screenshots/fantasy_list.png
[fantasy_movie_details]: ./screenshots/fantasy_movie_details.png
[movie_card1]: ./screenshots/movie_card1.png
[actor_details]: ./screenshots/actors_details.png
[similar_movies]: ./screenshots/similar_movies.png
[actor_different_movie]: ./screenshots/actor_different_movie.png
[tv_shows]: ./screenshots/tv_shows.png
[tv_shows_fave_play]: ./screenshots/tv_shows_fave_play.png
[tv_show_play_list]: ./screenshots/tv_show_playlist.png
[tv_show_favourites]: ./screenshots/tv_show_favourotes.png
[tv_similar]: ./screenshots/tv_similar.png
[actor_list]: ./screenshots/actor_list.png
[actor_details]: ./screenshots/actor_details.png
[actor_add_to_favourite]: ./screenshots/actors_added_to_favourites.png
[supabase_reviews]: ./screenshots/supabase_reviews_table.png
[supabase_auth]: ./screenshots/supabase_auth_table.png
[supabase_images]: ./screenshots/supabase_images_bucket.png
[supabase_fantasy]: ./screenshots/supabase_fantasy_movies_table.png
[supabase_profiles]: ./screenshots/supabase_profiles_table.png
[storybook1]: ./screenshots/storybook1.png
