import "jquery-validation";

/*
 *
 * ----------------------------------------------- */
// jQuery Validation Plugin
// https://jqueryvalidation.org/
jQuery(function ($) {
  $(".form-container").validate({
    rules: {
      問い合わせ内容: {
        required: true,
      },
    },
    messages: {
      問い合わせ内容: {
        required: "必須項目です。",
      },
    },
    groups: {
      username: "郵便番号1 郵便番号2",
    },
    errorPlacement: function (error, element) {
      var $container = element.closest("tr").find(".error-container");

      if (element.attr("name") === "問い合わせ内容") {
        error.appendTo($container);
      } else if (
        element.attr("name") === "郵便番号1" ||
        element.attr("name") === "郵便番号2"
      ) {
        error.appendTo($container);
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element) {
      if (!($(element).hasClass("optional") && $(element).is(":blank"))) {
        $(element).closest(".form-group").addClass("has-error");
      }
    },
    unhighlight: function (element) {
      if (!($(element).hasClass("optional") && $(element).is(":blank"))) {
        $(element).closest(".form-group").removeClass("has-error");
      }
    },
  });
});

/*
 *
 * ----------------------------------------------- */
jQuery.extend(jQuery.validator.messages, {
  required: "必須項目です",
  remote: "このフィールドを修正してください",
  email: "有効なメールアドレスを入力してください",
  url: "有効なURLを入力してください",
  date: "有効な日付を入力してください",
  dateISO: "有効な日付（ISO）を入力してください",
  number: "有効な数字を入力してください",
  digits: "数字のみを入力してください",
  creditcard: "有効なクレジットカード番号を入力してください",
  equalTo: "同じ値をもう一度入力してください",
  extension: "有効な拡張子を含む値を入力してください",
  maxlength: jQuery.validator.format("{0} 文字以内で入力してください"),
  minlength: jQuery.validator.format("{0} 文字以上で入力してください"),
  rangelength: jQuery.validator.format(
    "{0} 文字から {1} 文字までの値を入力してください"
  ),
  range: jQuery.validator.format("{0} から {1} までの値を入力してください"),
  step: jQuery.validator.format("{0} の倍数を入力してください"),
  max: jQuery.validator.format("{0} 以下の値を入力してください"),
  min: jQuery.validator.format("{0} 以上の値を入力してください"),
});

/*
 *
 * ----------------------------------------------- */
jQuery.validator.addMethod(
  "custom-email",
  function (value, element) {
    var emailArray = value.split("@");
    // preg_match("/^[\.!#%&\-_0-9a-zA-Z\?\/\+]+\@[!#%&\-_0-9a-z]+(\.[!#%&\-_0-9a-z]+)+$/", "$str") && count($mailaddress_array) ==2

    return (
      this.optional(element) ||
      (/^[.!#%&\-_0-9a-zA-Z?/+]+@[!#%&\-_0-9a-z]+(\.[!#%&\-_0-9a-z]+)+$/.test(
        value
      ) &&
        emailArray.length === 2)
    );
  },
  "正しいメールアドレスを入力して下さい。"
);
