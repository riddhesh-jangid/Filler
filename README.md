# Filler
Chrome extension that saves data of different persons and fill web forms 

#### How to save data 

1) Click on edit
2) Insert a unique number for every person in token field
3) Insert all details of person
4) Click on save

#### How to fill web forms

1) Enter token of person 
2) Enter pattern according to site<br/>
***Every data have a unique character you can find in help***

#### How to find pattern

1) Note down sequence of input field in site
2) Every data have a unique character like username have u
3) Write down unique characters in sequence of input fields

***Site for testing Filler : https://formforfill.000webhostapp.com***

### Problem with Filler

There are some sites which have some input fields with hidden type. This makes a problem with pattern creation because
we can't see invisible field on site and can't make correct sequence.

#### Solution 

Insert b character in place of hidden inputs. If there are two hidden input before every other input then start sequence
from bb

#### How to find hidden input

We can find either by inspect code or by hit and try

#### Hit & Try

1) Assume that their are no hidden inputs and write sequence
2) If inputs don't get fill correctly then insert b before sequence
3) Prepare final sequence after inserting b according to hit & try
