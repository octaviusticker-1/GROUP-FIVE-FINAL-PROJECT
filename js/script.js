
// ================================
// GROUP FIVE WEBSITE JAVASCRIPT
// ================================


// ================================
// ABOUT US: MEMBER INFORMATION MODAL
// ================================

const memberModal = document.getElementById("memberModal");

if (memberModal) {

    const memberPhotos = document.querySelectorAll(".member-photo");
    const closeMemberModal = document.getElementById("closeMemberModal");
    const modalDone = document.getElementById("modalDone");

    const modalInitials = document.getElementById("modalInitials");
    const modalName = document.getElementById("modalName");
    const modalID = document.getElementById("modalID");

    function closeMember() {
        memberModal.classList.remove("show");
    }

    memberPhotos.forEach((photo) => {

        photo.addEventListener("click", () => {

            modalInitials.textContent = photo.dataset.initials;
            modalName.textContent = photo.dataset.name;
            modalID.textContent = "Student ID: " + photo.dataset.id;

            memberModal.classList.add("show");
        });

    });

    if (closeMemberModal) {
        closeMemberModal.addEventListener("click", closeMember);
    }

    if (modalDone) {
        modalDone.addEventListener("click", closeMember);
    }

    memberModal.addEventListener("click", (event) => {
        if (event.target === memberModal) {
            closeMember();
        }
    });

}


// ================================
// CONTACT: FORM CONFIRMATION MODAL
// ================================

const contactForm = document.getElementById("contactForm");
const confirmationModal = document.getElementById("confirmationModal");

if (contactForm && confirmationModal) {

    const confirmSubmit = document.getElementById("confirmSubmit");
    const cancelSubmit = document.getElementById("cancelSubmit");
    const formStatus = document.getElementById("formStatus");

    // Open confirmation modal
    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        confirmationModal.classList.add("show");
        confirmationModal.setAttribute("aria-hidden", "false");

    });


    // Confirm submission
    confirmSubmit.addEventListener("click", () => {

        confirmationModal.classList.remove("show");
        confirmationModal.setAttribute("aria-hidden", "true");

        // Demonstration only: no email or database submission yet.
        formStatus.textContent =
            "Your form passed the confirmation step. This demonstration does not send your message to an email or database yet.";

        formStatus.style.color = "#0b7a42";

        contactForm.reset();

    });


    // Cancel submission
    cancelSubmit.addEventListener("click", () => {

        confirmationModal.classList.remove("show");
        confirmationModal.setAttribute("aria-hidden", "true");

    });


    // Close modal when clicking outside the box
    confirmationModal.addEventListener("click", (event) => {

        if (event.target === confirmationModal) {

            confirmationModal.classList.remove("show");
            confirmationModal.setAttribute("aria-hidden", "true");

        }

    });

}


// ================================
// CLOSE MODALS WITH ESCAPE KEY
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        const openMemberModal = document.getElementById("memberModal");
        const openConfirmationModal =
            document.getElementById("confirmationModal");

        if (openMemberModal) {
            openMemberModal.classList.remove("show");
        }

        if (openConfirmationModal) {
            openConfirmationModal.classList.remove("show");
            openConfirmationModal.setAttribute("aria-hidden", "true");
        }

    }

});
