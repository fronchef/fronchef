# **Fronchef**

![logoo](https://github.com/user-attachments/assets/9d425b7a-9a8b-4cf3-9cf1-73461649d199)

### **Your Ultimate UI Component Library**  
Fronchef is a comprehensive open-source UI component library designed to simplify development across various frameworks. With Fronchef, you can quickly create visually appealing and responsive applications while adhering to industry best practices.  

Our library supports:  
- **React.js**
- **Next.js**
- **Static HTML**
- And more!  

Join the Fronchef community to contribute, learn, and grow with like-minded developers.  

---

## **Features**  
- 📦 Pre-built components for faster development  
- 🛠️ Highly customizable and modular design  
- 🌐 Support for multiple frameworks  
- 🎨 Built with Tailwind CSS and vanilla CSS for styling  

---

## **Contribute to Fronchef Components**  
Fronchef thrives on community contributions! Follow these steps to add your components and enhance the library.  

---

### **Contribution Guide**

#### Step 1: **Create Your Component**  
- Develop your component in a separate repository or folder.  
- Deploy it live using **GitHub Pages** or **Vercel** for demonstration purposes.

#### Step 2: **Fork the Fronchef Repository**  
- Navigate to the [Fronchef GitHub Repository](#) and click on `Fork`.

#### Step 3: **Clone the Repository**  
- Clone the repository to your local machine using:  
  ```bash
  git clone https://github.com/fronchef/fronchef.git
  ```
  Or download the ZIP file.

#### Step 4: **Add Your Component to Fronchef**  
- Navigate to the folder where components are stored:  
  ```bash
  cd components/render
  ```
- Go to the directory for your framework. For example, for React components:  
  ```bash
  cd components/render/reactRen
  ```
- Create a new folder named `id[n+1]` for your component (replace `[n+1]` with the next ID).  
- Add two mandatory files to this folder:  
  1. `Component.js`: Contains your component code.  
  2. `Bundle.tsx`: Defines your component's metadata with this structure:  
     ```typescript
     export const CodeSnippetBundle = {
         code: "", // Your component in string format
         SrcCode: [
             { name: "", code: "" }, // Helper components
         ],
         Modifications: [
             { name: "", code: "" }, // Global modifications
         ],
         dependencies: [], // List of dependencies
         message: [], // Optional messages
     };
     ```

  2. Your `Bundle.tsx` will look like this after completion:  
     
     ![Example](https://github.com/user-attachments/assets/e3ae1895-350d-4691-a2e5-aed111dc55c7)


#### Step 5: **Prepare Images**  
- Navigate to:  
  ```bash
  src/comp-images/react/id[n+1]
  ```
- Add **thumbnail** and **overview images** for your component.

#### Step 6: **Update Component Metadata**  
- Open the file:  
  ```bash
  src/constant/reactComp.ts
  ```
- Add details about your component, including the thumbnail, overview, and bundle.

![Demo](https://github.com/user-attachments/assets/e6abbe41-6a1f-45c2-a680-8db4a410d2cf)

#### Step 7: **Push Your Changes**  
- Push the changes to your forked repository:  
  ```bash
  git add .
  git commit -m "Added new component"
  git push origin main
  ```

#### Step 8: **Submit a Pull Request**  
- Go to the original Fronchef repository and create a Pull Request (PR).  
- Add a meaningful description of your contribution.

#### Step 9: **Review and Merge**  
- Wait for the maintainers to review and merge your PR. 🎉

---

### **Video Tutorial**  
Need more help? Check out our detailed tutorial on YouTube!  
[![Watch the tutorial](https://github.com/user-attachments/assets/9d425b7a-9a8b-4cf3-9cf1-73461649d199)](https://www.youtube.com)


---

### **Join Us!**  
Fronchef is more than just a library—it’s a community. 🌟  
- Star us on GitHub! ⭐    
- Share your feedback and suggestions to help us grow.  

Let’s build something amazing together!  

--- 
