import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
        </div>

        {/* คอร์สของเรา */}
        <div>
          <h3 className="text-lg font-semibold mb-2">คอร์สของเรา</h3>
          <ul>
            <li>Data</li>
            <li>Science</li>
            <li>Tech</li>
            <li>Business</li>
          </ul>
        </div>

        {/* เกี่ยวกับเรา */}
        <div>
          <h3 className="text-lg font-semibold mb-2">เกี่ยวกับเรา</h3>
          <ul>
            <li>คอนแทคเรา</li>
            <li>ติดต่อสอบถามเพิ่มเติม</li>
            <li>แจ้งปัญหาที่พบ</li>
            <li>ช่องทางการร้องเรียน</li>
          </ul>
        </div>

        {/* ความปลอดภัย */}
        <div>
          <h3 className="text-lg font-semibold mb-2">ความปลอดภัย</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Data Protection Policy Six</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact and Description */}
        <div>
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <p>199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</p>
          <p>ติดต่อเรา</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300">
          <p>Y.I.M Corporation © 2023. All rights reserved.</p>
          <p>0-3835-4580-4 , 0-3835-2611-6</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
