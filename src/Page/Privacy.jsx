import React from "react";
import "../assets/css/privacy.css";
export default function Privacy() {
  document.title="Điều khoản bảo mật Tai"
  return (
    <div className="privacy">
      <div className="container">
        <div className="privacy__header">
          CHÍNH SÁCH QUYỀN RIÊNG TƯ CỦA <span>Tai</span>
        </div>
        <div className="privacy__header-des">
          <p>
            Nhằm mang lại trải nghiệm tốt nhất cho người dùng trên hệ thống
            <span>Tai</span>, thông tin nhận dạng cá nhân hoặc dữ liệu cá nhân
            của quý khách hàng sẽ được thu thập, sử dụng, tiết lộ, xử lý trong
            khuôn khổ bảo vệ người dùng.
          </p>
          <p>
            Công ty tin rằng quý khách hàng có quyền được biết về các loại dữ
            liệu cá nhân mà chúng tôi thu thập cũng như mục đích sử dụng chúng
            trên hệ thống, cả trên trang web và/hoặc trên ứng dụng của Tai
            <b> ("Hệ thống") </b>. Sau khi đọc Chính sách Quyền riêng tư này,
            quý khách hàng sẽ có thể mình tự quyết định việc chia sẻ dữ liệu cá
            nhân với chúng tôi. Dữ liệu cá nhân ở đây đề cập đến mọi thông tin
            liên quan đến một thể nhân có thể định danh/ nhận dạng được
            <b>("Dữ liệu cá nhân")</b>. Khi nhấp chọn "đồng ý", quý khách hàng
            thừa nhận rằng quý khách hàng đã đọc Chính sách Quyền riêng tư này
            và các Điều khoản Sử dụng (liên kết) của <span>Tai</span> cũng như
            đã hiểu toàn bộ nội dung &amp; hậu quả của chúng; quý khách hàng
            đồng ý và chấp thuận cho chúng tôi thu thập, sử dụng, tiết lộ và xử
            lý Dữ liệu cá nhân theo Chính sách Quyền riêng tư này và/hoặc các
            Điều khoản Sử dụng. Hơn nữa, quý khách hàng cũng thừa nhận rằng toàn
            bộ Dữ liệu cá nhân mà quý khách hàng đã cung cấp hoặc sẽ cung cấp là
            dữ liệu chính chủ, đúng và chính xác.
          </p>
          <p>
            Tùy từng thời điểm, <span>Tai</span> có thể sửa đổi Chính sách Quyền
            riêng tư này để phản ánh các thay đổi về luật pháp và quy định,
            thông lệ sử dụng của Công ty, các tính năng Hệ thống và/hoặc các
            tiến bộ công nghệ. Nếu có phiên bản sửa đổi về chính sách thu thập
            hoặc sử dụng Dữ liệu cá nhân của quý khách hàng thì những nội dung
            thay đổi sẽ được cập nhật vào Chính sách Quyền riêng tư này và ngày
            hiệu lực sẽ được ghi chú vào phần đầu văn bản. Do đó, quý khách hàng
            nên định kỳ xem lại Chính sách Quyền riêng tư này để cập nhật các
            chính sách và thông lệ mới nhất từ chúng tôi. Nếu quý khách hàng
            không đồng ý với bất kỳ thay đổi hoặc sửa đổi nào đối với Chính sách
            Quyền riêng tư, quý khách hàng có quyền ngừng sử dụng Hệ thống. Nếu
            quý khách hàng tiếp tục sử dụng Hệ thống sau ngày sửa đổi có hiệu
            lực, quý khách hàng sẽ được xem là đã đồng ý và chấp nhận (các) sửa
            đổi của Chính sách Quyền riêng tư.
          </p>
        </div>
        <div className="privacy__list">
          <h4>Chính sách Quyền riêng tư này giải thích về:</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <li>
              <a href="#1">Thông tin thu thập</a>
            </li>
            <li>
              <a href="#2">Mục đích sử dụng thông tin</a>
            </li>
            <li>
              <a href="#3">Chia sẻ Dữ liệu cá nhân</a>
            </li>
            <li>
              <a href="#4">
                Phương thức truy cập hoặc chỉnh sửa Dữ liệu cá nhân
              </a>
            </li>
            <li>
              <a href="#5">Rút lại sự chấp thuận</a>
            </li>
            <li>
              <a href="#6">Xóa Dữ liệu cá nhân</a>
            </li>
            <li>
              <a href="#7">Lưu giữ Dữ liệu cá nhân của quý khách hàng</a>
            </li>
            <li>
              <a href="#8">Bảo vệ Dữ liệu cá nhân</a>
            </li>
            <li>
              <a href="#9">Liên kết đến các trang web khác</a>
            </li>
            <li>
              <a href="#10">Đăng ký và Quyền thành viên</a>
            </li>
            <li>
              <a href="#11">Các điều khoản khác</a>
            </li>
            <li>
              <a href="#12">Thông tin liên hệ của chúng tôi</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <div id={1} className="item">
            <h5>1. Thông tin thu thập</h5>
            <p>
              Khi được sự đồng ý của quý khách hàng, chúng tôi có thể thu thập
              Dữ liệu cá nhân của quý khách hàng để cung cấp dịch vụ của chúng
              tôi cho quý khách hàng khi sử dụng Hệ thống. Ngoài ra, chúng tôi
              cũng có thể thu thập Dữ liệu cá nhân vì những lý do khác được cung
              cấp thêm trong Chính sách Quyền riêng tư. Dữ liệu cá nhân bao gồm
              những thông tin được trình bày dưới đây.
            </p>
            <ul>
              <li>
                <p>
                  <b>
                    <u>Thông tin cá nhân cơ bản:</u>
                  </b>{" "}
                  khi quý khách hàng đang sử dụng Hệ thống của chúng tôi, chúng
                  tôi có thể yêu cầu quý khách hàng tạo một tài khoản để tiến
                  hành đặt chỗ. Dữ liệu cá nhân được thu thập sẽ bao gồm, nhưng
                  không giới hạn tên của quý khách hàng, thông tin nhận dạng
                  người dùng và thông tin đăng nhập của <span>Tai</span>, địa
                  chỉ email và số điện thoại.
                </p>
              </li>
              <li>
                <p>
                  <b>
                    <u>Thông tin cá nhân cụ thể:</u>
                  </b>{" "}
                  chúng tôi có thể thu thập Dữ liệu cá nhân của quý khách hàng
                  dựa trên quá trình quý khách hàng sử dụng Hệ thống của chúng
                  tôi, ví dụ: chi tiết về đặt phòng khách sạn của quý khách hàng
                  (như tên khách sạn, vị trí khách sạn và/hoặc thời gian lưu
                  trú), sở thích du lịch của quý khách hàng, chi tiết về quyền
                  thành viên thường xuyên của hãng hàng không của quý khách hàng
                  cũng như những đánh giá của quý khách hàng. Chúng tôi cũng có
                  thể thu thập một số thông tin nhất định từ quý khách hàng khi
                  quý khách hàng đang sử dụng Hệ thống của chúng tôi, chẳng hạn
                  như vị trí địa lý, địa chỉ IP, tùy chọn tìm kiếm cũng như các
                  dữ liệu liên quan đến việc sử dụng Internet chung khác.
                </p>
                <ul>
                  <li>
                    <p>
                      <b>o Vị trí địa lý:</b> khi được sự đồng ý của quý khách
                      hàng, chúng tôi có thể thu thập Dữ liệu cá nhân của quý
                      khách hàng về vị trí thực tế của quý khách hàng để cung
                      cấp cho quý khách hàng các ưu đãi ở các vị trí liên quan
                      được cung cấp trên Hệ thống của chúng tôi. Chúng tôi cũng
                      có thể lấy được vị trí gần đúng của quý khách hàng từ địa
                      chỉ IP và GPS của quý khách hàng.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Thông tin nhật ký:</b> khi quý khách hàng đang sử dụng
                      Hệ thống của chúng tôi, chúng tôi có thể thu thập dữ liệu
                      của quý khách hàng mà chúng tôi gọi là "thông tin nhật
                      ký". Thông tin nhật ký vẫn có thể được thu thập ngay cả
                      khi quý khách hàng không tạo bất kỳ tài khoản nào trên Hệ
                      thống của chúng tôi. Thông tin nhật ký này có thể bao gồm
                      địa chỉ IP, loại trình duyệt, hệ điều hành, quốc tịch, vị
                      trí truy cập trang, nhà cung cấp dịch vụ di động, thông
                      tin thiết bị và lịch sử tìm kiếm cũng như thông tin liên
                      quan đến việc sử dụng internet chung khác. Chúng tôi sử
                      dụng thông tin nhật ký để cung cấp cho người dùng trải
                      nghiệm tốt hơn khi sử dụng Hệ thống của chúng tôi.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Cookies và các công nghệ tương tự:</b> chúng tôi có thể
                      sử dụng cookie và/hoặc các công nghệ tương tự (như tập tin
                      chỉ báo-web beacons, thẻ-tags, tập lệnh-scripts). Cookies
                      là một phần nhỏ dữ liệu được lưu trữ trong máy tính hoặc
                      thiết bị di động của quý khách hàng để giúp chúng tôi theo
                      dõi quý khách hàng. Giống như các trang web khác, chúng
                      tôi có thể sử dụng cookies để cung cấp cho quý khách hàng
                      trải nghiệm tốt hơn, vì vậy máy tính và/hoặc thiết bị di
                      động của quý khách hàng sẽ nhận ra quý khách hàng khi quý
                      khách hàng sử dụng Hệ thống của chúng tôi sau đó. Vui lòng
                      hủy tùy chọn cookies, nếu quý khách hàng muốn chúng tôi
                      dừng tính năng cookies.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div id={2} className="item">
            <h5>2. Mục đích sử dụng thông tin</h5>
            <p>
              Chúng tôi cũng có thể thu thập và lưu trữ thông tin của quý khách
              hàng để cung cấp cho quý khách hàng các gói dịch vụ tốt nhất phù
              hợp với sở thích của quý khách hàng. Ngoài ra, chúng tôi cũng có
              thể sử dụng thông tin của quý khách hàng được thu thập thông qua
              Hệ thống cho các mục đích sau:
            </p>
            <ul style={{ listStyle: "decimal" }}>
              <li>đăng ký sử dụng và/hoặc truy cập Hệ thống;</li>
              <li>quản lý, vận hành, quản trị và/hoặc truy cập Hệ thống;</li>
              <li>
                liên hệ với quý khách hàng về các vấn đề liên quan đến việc quý
                khách hàng sử dụng và/hoặc truy cập vào Hệ thống và quản lý các
                truy vấn và/hoặc yêu cầu do quý khách hàng gửi qua Hệ thống;
              </li>
              <li>
                tùy chỉnh trải nghiệm của quý khách hàng khi sử dụng Hệ thống và
                cải thiện trải nghiệm và sự hài lòng của khách hàng;
              </li>
              <li>
                công bố đánh giá của quý khách hàng về các dịch vụ của chúng tôi
                cũng như các sản phẩm được liệt kê trên Hệ thống của chúng tôi;
              </li>
              <li>
                thực thi các quy định trong các Điều khoản và Điều kiện của
                chúng tôi;
              </li>
              <li>
                giải quyết tranh chấp, thu tiền thanh toán còn tồn đọng và xử lý
                sự cố và/hoặc;
              </li>
              <li>
                cho các mục đích khác sẽ được thông báo cho quý khách hàng tại
                thời điểm thu thập.
              </li>
            </ul>
            <p>
              Chúng tôi cũng có thể sử dụng Dữ liệu cá nhân của quý khách hàng
              và các thông tin khác được thu thập để:
            </p>
            <ul>
              <li>
                tiếp thị kỹ thuật số bao gồm, nhưng không giới hạn truyền thông
                xã hội, quảng cáo hiển thị, tối ưu hóa công cụ tìm kiếm
                <b>("SEO")</b>, tiếp thị qua công cụ tìm kiếm <b>("SEM")</b>,
                thông báo đẩy (Push Notification) bằng cách sử dụng các kỹ thuật
                đồ thị mở và
              </li>
              <li>
                tiếp thị truyền thống trong đó, bao gồm nhưng không giới hạn,
                gửi email cho quý khách hàng về các sản phẩm mới, khuyến mại đặc
                biệt và các cuộc khảo sát hoặc các thông tin khác mà chúng tôi
                nghĩ quý khách hàng có thể thấy thú vị.
              </li>
              <li>
                Xin lưu ý rằng quý khách hàng có thể từ chối mọi tài liệu tiếp
                thị mà chúng tôi có thể gửi cho quý khách hàng bằng cách làm
                theo các hướng dẫn hủy đăng ký được nêu trong các tài liệu tiếp
                thị của chúng tôi; nếu quý khách hàng chọn từ chối bất kỳ tài
                liệu tiếp thị nào, chúng tôi sẽ tôn trọng mong muốn của quý
                khách hàng. Tuy nhiên, xin lưu ý rằng thông tin tiếp thị, đề
                xuất mua hàng và các liên hệ khác mà chúng tôi hiển thị trên
                trang web và ứng dụng của chúng tôi được định hướng và cá nhân
                hóa dựa trên dữ liệu kết hợp mà chúng tôi đã thu thập về quý
                khách hàng.
              </li>
            </ul>
          </div>
          <div id={3} className="item">
            <h5>3. Chia sẻ Dữ liệu cá nhân</h5>
            <p>
              Dữ liệu cá nhân của quý khách hàng có thể được chia sẻ cho các
              công ty, tổ chức và/hoặc cá nhân liên kết ("Bên thứ ba") để hoàn
              thành dịch vụ chúng tôi cung cấp cho quý khách hàng. Chúng tôi có
              thể thuê Bên thứ ba để sử dụng các dịch vụ của họ, bao gồm, nhưng
              không giới hạn việc lưu trữ trang web, phân tích dữ liệu, tiếp
              thị, khuyến mãi, xử lý giao dịch thẻ tín dụng và các dịch vụ khác
              có liên quan.
            </p>
            <p>
              Tùy thuộc vào vị trí của quý khách hàng, <span>Tai</span> và Bên
              thứ ba cũng có thể chuyển Dữ liệu cá nhân của quý khách hàng ra
              nước ngoài.
            </p>
            <p>
              Xin lưu ý rằng <span>Tai</span> có thể tiết lộ Dữ liệu cá nhân của
              quý khách hàng với các điều kiện sau:
            </p>
            <ul>
              <li>
                <p>
                  <b>Cung cấp thông tin khi có sự chấp thuận:</b> Chúng tôi sẽ
                  chỉ chia sẻ Dữ liệu cá nhân của quý khách hàng với Bên thứ ba
                  khi chúng tôi nhận được sự chấp thuận của quý khách hàng cho
                  phép chúng tôi làm như vậy. Chúng tôi sẽ cần sự chấp thuận của
                  quý khách hàng để chia sẻ bất kỳ Dữ liệu cá nhân nhạy cảm nào,
                  theo yêu cầu của luật pháp và quy định hiện hành. Khi nhấp
                  chọn nút "Đồng ý", quý khách hàng đã thiết lập một hành động
                  khẳng định rõ ràng và một thỏa thuận tự nguyện, cụ thể, đã
                  hiểu rõ và không mơ hồ về việc xử lý Dữ liệu cá nhân. Điều này
                  có thể bao gồm cả việc chia sẻ Dữ liệu cá nhân đã thu thập cho
                  Bên thứ ba.
                </p>
              </li>
              <li>
                <p>
                  <b>Cung cấp thông tin cho Bên mua:</b> Điều này xảy ra khi
                  chúng tôi bán, chuyển giao hoặc thực hiện các chuyển nhượng
                  khác liên quan đến một phần hoặc toàn bộ doanh nghiệp hoặc
                  công ty.
                </p>
              </li>
              <li>
                <p>
                  <b>Cung cấp thông tin vì lý do pháp lý:</b> Chúng tôi có thể
                  có toàn quyền quyết định về việc chia sẻ Dữ liệu cá nhân của
                  quý khách hàng với Bên thứ ba nếu chúng tôi cho rằng việc chia
                  sẻ dữ liệu là cần thiết để: i) tuân thủ luật pháp và quy định
                  hiện hành; ii) thực thi các Điều khoản và Điều kiện của chúng
                  tôi; iii) điều tra bất kỳ hành vi gian lận hoặc hành vi bất
                  hợp pháp nào; và/hoặc iv) bảo vệ thương hiệu, uy tín cũng như
                  tài sản của chúng tôi.
                </p>
              </li>
            </ul>
          </div>
          <div id={4} className="item">
            <h5>4. Phương thức truy cập hoặc chỉnh sửa Dữ liệu cá nhân</h5>
            <p>
              Khi quý khách hàng cung cấp cho chúng tôi Dữ liệu cá nhân của quý
              khách hàng, vui lòng đảm bảo rằng những dữ liệu đó là chính xác và
              đầy đủ. Nếu quý khách hàng tin rằng bất kỳ thông tin nào mà chúng
              tôi đang nắm giữ có sai sót hoặc thiếu sót, vui lòng đăng nhập vào
              tài khoản của quý khách hàng trên Hệ thống và sửa lại thông tin.
              Ngoài ra, quý khách hàng nên nhanh chóng cập nhật Dữ liệu cá nhân
              thông qua tài khoản nếu có bất kỳ thay đổi nào. Nếu quý khách hàng
              muốn sửa những sai sót hoặc thiếu sót trong bất kỳ Dữ liệu cá nhân
              nào mà chúng tôi đang nắm giữ, nhưng không cho truy cập sửa chữa
              thông qua Hệ thống hoặc không cho truy cập vào các Dữ liệu cá nhân
              theo quyền nắm giữ hoặc kiểm soát của chúng tôi, hoặc theo quy
              định của pháp luật hiện hành, vui lòng gửi yêu cầu của quý khách
              hàng theo thông tin liên hệ trình bày bên dưới.
            </p>
          </div>
          <div id={5} className="item">
            <h5>5. Rút lại sự chấp thuận</h5>
            <p>
              Quý khách hàng có thể rút lại sự chấp thuận đối với việc thu thập,
              sử dụng hoặc tiết lộ Dữ liệu cá nhân của chúng tôi bằng cách gửi
              thông báo hợp lý cho chúng tôi. Nếu quý khách hàng muốn rút lại sự
              đồng ý của quý khách hàng, xin vui lòng thông báo cho chúng tôi
              theo thông tin liên hệ trình bày bên dưới. Theo yêu cầu của quý
              khách hàng, chúng tôi sẽ ngừng thu thập, sử dụng hoặc tiết lộ Dữ
              liệu cá nhân của quý khách hàng, trừ khi pháp luật yêu cầu hoặc
              nếu chúng tôi có các mục đích kinh doanh hoặc pháp lý hợp pháp để
              giữ lại dữ liệu đó. Lưu ý rằng khi quý khách hàng rút lại sự đồng
              thuận đối với việc thu thập, sử dụng hoặc tiết lộ Dữ liệu cá nhân
              sẽ khiến chúng tôi không thể tiếp tục cung cấp cho quý khách hàng
              các dịch vụ của chúng tôi và quý khách hàng đồng ý rằng chúng tôi
              sẽ không chịu trách nhiệm với quý khách hàng về bất kỳ tổn thất
              hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc chấm dứt
              dịch vụ như vậy. Nếu sau khi rút lại sự đồng thuận, nhưng quý
              khách hàng vẫn quyết định sử dụng lại các dịch vụ của chúng tôi,
              quý khách hàng sẽ cần phải nhấp vào nút đồng ý một lần nữa để xác
              nhận sự đồng ý của quý khách hàng như đã nêu ở trên trong Chính
              sách Quyền riêng tư này.
            </p>
          </div>
          <div id={6} className="item">
            <h5>6. Xóa Dữ liệu cá nhân</h5>
            <p>
              Quý khách hàng có thể yêu cầu xóa Dữ liệu cá nhân của quý khách
              hàng do chúng tôi thu thập và xử lý, bằng cách gửi cho chúng tôi
              một lý do hợp lý. Nếu quý khách hàng muốn xóa dữ liệu của mình,
              quý khách hàng nên thông báo cho chúng tôi theo thông tin liên hệ
              của chúng tôi được trình bày bên dưới.
            </p>
            <p>
              Theo yêu cầu của quý khách hàng, chúng tôi sẽ cố gắng xóa Dữ liệu
              cá nhân của quý khách hàng trong hệ thống của chúng tôi. Chúng tôi
              sẽ ngừng thu thập, sử dụng hoặc tiết lộ Dữ liệu cá nhân của quý
              khách hàng, trừ khi pháp luật yêu cầu hoặc nếu chúng tôi có các
              mục đích kinh doanh hoặc pháp lý hợp pháp để giữ lại dữ liệu đó.
              Lưu ý rằng bằng việc yêu cầu xóa Dữ liệu cá nhân của quý khách
              hàng, chúng tôi không thể tiếp tục cung cấp cho quý khách hàng các
              dịch vụ của chúng tôi và quý khách hàng đồng ý rằng chúng tôi sẽ
              không chịu trách nhiệm với quý khách hàng về bất kỳ tổn thất hoặc
              thiệt hại nào phát sinh từ hoặc liên quan đến việc chấm dứt dịch
              vụ như vậy.
            </p>
          </div>
          <div id={7} className="item">
            <h5>7. Lưu giữ Dữ liệu cá nhân của quý khách hàng</h5>
            <p>
              Miễn là tài khoản của quý khách hàng vẫn còn tồn tại, chúng tôi sẽ
              lưu Dữ liệu cá nhân của quý khách hàng để cung cấp các dịch vụ khi
              cần. Chúng tôi sẽ ngừng lưu giữ Dữ liệu cá nhân hoặc với nỗ lực
              hợp lý để xóa các phương tiện có liên quan đến Dữ liệu cá nhân của
              Quý khách hàng, ngay khi, 1) mục đích thu thập Dữ liệu cá nhân
              không còn phù hợp với việc lưu giữ dữ liệu; và 2) luật hiện hành
              không yêu cầu lưu giữ dữ liệu và/hoặc không cần thiết cho mục đích
              kinh doanh.
            </p>
          </div>
          <div id={8} className="item">
            <h5>8. Bảo vệ Dữ liệu cá nhân</h5>
            <p>
              Chúng tôi sẽ bảo vệ Dữ liệu cá nhân của quý khách hàng bằng cách
              duy trì các thỏa thuận bảo mật hợp lý, bao gồm các quy trình vật
              lý, kỹ thuật và tổ chức, để ngăn chặn các hành vi truy cập, thu
              thập, sử dụng, tiết lộ, sao chép, sửa đổi, xử lý dữ liệu trái phép
              hoặc các rủi ro tương tự. Nếu có bất kỳ hành vi nào vi phạm Dữ
              liệu cá nhân, chúng tôi sẽ thông báo cho quý khách hàng thông qua
              các kênh của chúng tôi, bất kể trực tiếp hay gián tiếp, để cung
              cấp cho quý khách hàng thông tin đầy đủ về việc vi phạm Dữ liệu cá
              nhân đó. Sau khi thông báo, chúng tôi sẽ cố gắng hết sức để phục
              hồi tính bảo mật của Dữ liệu cá nhân của quý khách hàng trên Hệ
              thống.
            </p>
          </div>
          <div id={9} className="item">
            <h5>9. Liên kết đến các trang web khác</h5>
            <p>
              Hệ thống của chúng tôi có thể chứa các liên kết đến các trang web
              liên quan khác. Tuy nhiên, khi quý khách hàng đã sử dụng các liên
              kết này để rời khỏi Hệ thống, quý khách hàng nên lưu ý rằng chúng
              tôi không có bất kỳ quyền kiểm soát nào đối với các trang web này
              cũng như không chịu trách nhiệm về Chính sách Quyền riêng tư hoặc
              thông lệ của các trang web này, do đó quý khách hàng nên đọc kỹ
              Chính sách Quyền riêng tư của từng trang web truy cập có tính năng
              thu thập Dữ liệu cá nhân.
            </p>
          </div>
          <div id={10} className="item">
            <h5>10. Đăng ký và Quyền thành viên</h5>
            <p>
              Hệ thống này cho phép quý khách hàng tạo tài khoản người dùng dựa
              trên dữ liệu quý khách hàng cung cấp. Bằng cách cung cấp dữ liệu,
              đăng ký và tạo tài khoản của quý khách hàng, quý khách hàng đảm
              bảo rằng:
            </p>
            <ul>
              <li>Quý khách hàng đã đủ 18 tuổi;</li>
              <li>
                Thông tin về quý khách hàng là đúng và chính xác, ở thời điểm
                hiện tại và đầy đủ theo yêu cầu trong mẫu đăng ký trên Hệ thống
                <b>("Dữ liệu đăng ký")</b>; và
              </li>
              <li>
                Quý khách hàng sẽ cập nhật Dữ liệu đăng ký này để duy trì tính
                chính xác và đầy đủ.
              </li>
            </ul>
          </div>
          <div id={11} className="item">
            <h5>11. Các điều khoản khác</h5>
            <ul>
              <li>
                <p>
                  <b>Hiệu lực áp dụng:</b> trong trường hợp không thống nhất
                  giữa các Điều khoản và Điều kiện và Chính sách Quyền riêng tư
                  này, thì các quy định trong Chính sách Quyền riêng tư này sẽ
                  được ưu tiên áp dụng.
                </p>
              </li>
              <li>
                <p>
                  <b>Chuyển nhượng doanh nghiệp:</b> trong trường hợp thay đổi
                  quyền kiểm soát hoặc quyền sở hữu doanh nghiệp hoặc tập đoàn
                  công ty của <span>Tai</span>, thì Dữ liệu cá nhân được thu
                  thập trong Hệ thống có thể là một phần của chuyển nhượng tài
                  sản.
                </p>
              </li>
            </ul>
          </div>
          <div id={12} className="item">
            <h5>12. Thông tin liên hệ của chúng tôi</h5>
            <p>
              Nếu quý khách hàng có bất kỳ câu hỏi hoặc yêu cầu nào liên quan
              đến Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi
              qua:
              <a href="mailto:leductai9898@gmail.com">leductai9898@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
