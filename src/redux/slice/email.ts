import { createSelector, createSlice } from '@reduxjs/toolkit';
const name = 'email';

const initialState = {
  email: [
    {
      id: 1,
      from: "Eileen Morgan",
      to: "Drew Hawes",
      title: "Powerful creator tools for independent publishing",
      content: `<p> Hey Kianna, <br></br>

We wanted to call your attention to our new panel we released over night. Using this new feature, you’ll be able to view better analytics. <br></br>

If you have any questions about the best ways to use panel, please feel free to give us a call at 00 77 44 44 44 44. <br></br>

Best, <br></br>

Drew </p>`,
      day: "August 21 2022",
      inbox: true,
      outbox: false,
      favourites: false,
      drafts: false,
      deleted: false,
      important: false,
      work: true,
      task: false,
      business: false,
    },
    {
      id: 2,
      from: "Pep Guardiola",
      to: "Drew Hawes",
      title: "Answered: your most burning questions about Software",
      content: `<p> Hey Michele,

I know we haven't spoken in a while, so I just wanted to touch base. As always, I'm here as a resource for you, so just let me know if you have any questions about new features, best practices, or anything in between! <br></br>

As soon as you run into a question or concern, please let me know by email or you can call 00 77 44 44 44 44. <br></br>

If you're having a great experience with Google so far, would you be interested in referring us to your network? <br></br>

Kindly, <br></br>

Veer </p>`,
      day: "August 21 2022",
      inbox: true,
      outbox: false,
      favourites: false,
      drafts: false,
      deleted: false,
      important: true,
      work: false,
      task: false,
      business: true,
    },
    {
      id: 3,
      from: "Erling Haaland",
      to: "Drew Hawes",
      title:
        "If you've already tried Marketing, don't read this. It'll break your heart",
      content: `<p>Hey Kianna, <br></br>

We wanted to call your attention to our new panel we released over night. Using this new feature, you’ll be able to view better analytics.<br></br>

If you have any questions about the best ways to use panel, please feel free to give us a call at 00 77 44 44 44 44.<br></br>

Best,<br></br>

Drew <p>`,
      day: "August 21 2022",
      inbox: true,
      outbox: false,
      favourites: false,
      drafts: false,
      deleted: false,
      important: false,
      work: true,
      task: true,
      business: false,
    },
    {
      id: 4,
      from: "Virgil Van Dijk",
      to: "Drew Hawes",
      title: "15 things you didn't know about Web Development",
      content: `<p>Hi Drew,<br></br>

It was great meeting you the other day at Apple Conference 2022.<br></br>

I'd love to keep in touch and bounce some ideas around with you. Let's get coffee or lunch sometime soon. I'll follow up with you next week to see what’s possible. <br></br>

Look forward to connecting again soon.<br></br>

Cheers,<br></br>

Ferne</p>`,
      day: "August 21 2022",
      inbox: true,
      outbox: false,
      favourites: false,
      drafts: false,
      deleted: false,
      important: false,
      work: true,
      task: false,
      business: false,
    },
    {
      id: 5,
      from: "Lionel Messi",
      to: "Drew Hawes",
      title: "Answered: your most burning questions about Software",
      content: `<p>I hope you're doing well. I was hoping we could hop on the phone soon to get a better idea of what you're interested and what I can do to help. <br></br>

Are you available on Monday between 9:00 AM - 10:15 AM? Please let me know if there's a more convenient time. Also, is 00 77 44 44 44 44 still your preferred number? <br></br>

Looking forward to connecting soon, <br></br>

Edison </p>`,
      day: "August 21 2022",
      inbox: false,
      outbox: true,
      favourites: false,
      drafts: false,
      deleted: false,
      important: true,
      work: false,
      task: false,
      business: true,
    },
    {
      id: 6,
      from: "Memphis Depay",
      to: "Drew Hawes",
      title: "9 Marketing lessons from Bob Ross",
      content: ` <p> Hello, <br></br>

I just wanted you to know that I genuinely enjoyed getting to meet you, albeit briefly. Instead of just sending you information on me, I’d love to know some more about you! I value each of my new relationships highly, and don’t want to send you "blanket" information. <br></br>

So tell me — what’s been going well for you and your business lately? What challenges are you encountering? I’m happy to assist in any way possible, even if it means connecting you to someone else I know who may be a better fit. <br></br>

Looking forward to connecting more in-depth. <br></br>

Cheers, <br></br>

Manraj Steele`,
      day: "August 21 2022",
      inbox: false,
      outbox: false,
      favourites: false,
      drafts: false,
      deleted: true,
      important: false,
      work: false,
      task: false,
      business: true,
    },
    {
      id: 7,
      from: "Jose Mourinho",
      to: "Drew Hawes",
      title: "Powerful creator tools for independent publishing",
      content: `<p> Hey Veer, <br></br>

John here with Google Inc. You’ve been using our services for awhile, so I wanted to check in to see how things are going<br></br>

So, what questions can I answer? What features can I demo? What issues can I solve?<br></br>

I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between 10:00 - 11:30? If not then, let me know what works best for you.<br></br>

Best,<br></br>

John </p> `,
      day: "August 21 2022",
      inbox: false,
      outbox: false,
      favourites: true,
      drafts: false,
      deleted: true,
      important: true,
      work: false,
      task: false,
      business: true,
    },
  ]
};

const emailSlice = createSlice({
  name,
  initialState,
  reducers: {
    delete_single: (state, action) => {
      let curr = state.email
      curr.forEach(item => {
        if (item.id === action.payload)
          item.deleted = true
      })
      state.email = curr
    },
    delete_multiple: (state, action) => {
      let curr = state.email

    }
  },  
 
});

const selector = (state: { [x: string]: any; }) => state[name];
const selectEmail = createSelector(selector, ({ email }) => email);
export const emailSelectors = { selectEmail };

const { delete_single, delete_multiple  } = emailSlice.actions;
export const emailActions = { delete_single, delete_multiple };
export default emailSlice.reducer;
