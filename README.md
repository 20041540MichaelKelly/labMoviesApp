# Enterprise Web Development - Assignment 1.

__Name:__ [Michael Kelly 20041540]

## Overview.

[A bullet-point list of the features developed for the React SPA app (new/modified ones only for the Movies app),]

+ Feature Login.
+ Feature Signup. 
+ Feature Protected Routes.
+ Feature Public Routes.
+ Feature Addition filter options.
    + Language.
    + Rating (by selecting stars).
+ Feature Signup.
+ Feature A style that allows the user to hover over a card and select fro anywhere..
+ Feature The Appbar has is styled into dropdowns for wach section.
+ Feature Pagination 
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

[ For each feature listed in the overview, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include captions with the images.]

e.g. 

#### Login feature.

> Allows the user to login

![][login]

#### Signup Feature

> Allows User to signup if they have no account.

![][signup]

> Validation that the entered email does not exist already. Supabase Auth table does not allow you to query it for such validation so I had to create a trigger that would updat a profiles table with the exact same information and id. I could query the prifiles table then to see if the email entered existed.

![][error_email_exists_signup]

> Success alert appears to alert the user that they have been successful in creating an account.

![][success_signup]

#### HomePage with a search bar and differnt style

> HomePage with a search bar and differnt style. This homepage is basically a landing page but is also functional to the user.

![][home_page]

> There is a search bar included to search for a specific movie

![][home_page_search]

> The screenshot displays the movie cards on the home page, one movie has been added to favourites and a playlist.

![][home_page_movie_card]

> The screenshot displays the movie cards on the home page, one movie has been added to favourites and a playlist.

![][home_page_movie_card]

#### Upcoming Page

> Upcoming Page retrieves 20 movies from the tmdb endpoint. With the pagination I can go to the next 20 films and so on

![][upcoming_movies]

#### Hover Example

> User can hover over a movie and select it, rather than clicking a link at the bootom for more details

![][hover_example]

## Authentication.

[ List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.
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


#### Movies Reviews feature.

> Lists all the reviews for a particular movie (text extract only).

![][image2]

> Click the 'Full Review' link of an entry in the above list to show the full text of a review. 

![][image3]

.... other features .......

## Storybook.

[ Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][image5]

## Authentication.

[ List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.

+ /movies - List of 20  movies from the Discover endpoint,
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ etc
+ etc

#### Protected features (if relevant)

[ Briefly state other areas where you used authentication in the app, for example, to protect access to functionality, e.g. only authenticated users can 'favourite' a movie.]

#### Supabase (if relevant)

[ Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[ Specify the URL of your deployed app and include a screenshot(s) from your deployment platform (e.g. Vercal) account that verifies its use for this app. Have a preregistered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[ If you are persisting data to the Supabase backend, e.g. favourite movies, fantasy movie, include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

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


